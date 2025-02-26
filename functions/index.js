'use strict';

const functions = require('firebase-functions');

const Email = require('email-templates');

const formData = require('form-data');

const Mailgun = require('mailgun.js');

const mailgun = new Mailgun(formData);

const path = require('path');

const email = new Email({
  juice: true,
  juiceSettings: {
    tableElements: ['TABLE'],
  },
  juiceResources: {
    preserveImportant: true,
    webResources: {
      relativeTo: path.resolve('emails'),
    },
  },
});

/* eslint-disable  */

const aKey = functions.config().api.akey;
const testEmail = functions.config().api.emailtest2;
const intraEmail = functions.config().email.target;
const mg = mailgun.client({
  username: 'api',
  key: aKey,
});
function sendMail(html) {
  // const DOMAIN = functions.config().mailgun.base;

  return new Promise((resolve, reject) => {
    const message = {
      from: 'Bulk Careers Application Portal <no-reply@careers.app>',
      to: testEmail,
      subject: '<NEW APPLICATION>',
      html,
    };

    resolve(mg.messages.create(functions.config().mailgun.base, message));
  });
}

exports.alertNewApplication = functions.database
  .ref('/applicants/{applicantId}')
  .onCreate((snapshot, context) => {
    const data = snapshot.val();

    return email
      .render('html', data)
      .then(sendMail)
      .catch((error) => functions.logger.log(error));
  });
