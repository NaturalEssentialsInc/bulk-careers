'use strict';

const functions = require('firebase-functions');

const Email = require('email-templates');

// const formData = require('form-data');

// const Mailgun = require('mailgun.js');

// const mailgun = new Mailgun(formData);

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

function sendMail(html) {
  let htmlPug = html;

  const mailjetPubKey = functions.config().mailjet.pubkey;
  const mailjetPriKey = functions.config().mailjet.prikey;
  const emailTest = functions.config().mailjet.emailtest;
  const emailTarget = functions.config().mailjet.emailtarget;
  const fakeFrom = 'Bulk Careers Application Portal <no-reply@careers.app>';

  const mailjet = require('node-mailjet').connect(mailjetPubKey, mailjetPriKey);

  const handleEmail = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: fakeFrom,
          Name: 'Bulk Careers Application Portal',
        },
        To: [
          {
            Email: emailTest,
            Name: 'Bulk Careers Application Portal',
          },
        ],
        Subject: 'New Application',
        TextPart: 'New Application',
        HTMLPart: htmlPug,
      },
      request
        .then((result) => {
          console.log(result.body);
        })
        .catch((err) => {
          console.log(err.statusCode);
        }),
    ],
  });

  return handleEmail;
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
