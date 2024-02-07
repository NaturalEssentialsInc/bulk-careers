const admin = require('firebase-admin');

const { getDatabase } = require('firebase-admin/database');


require('dotenv').config({
  path: `.env.${process.env}`,
});



SDK_TYPE = "service_account";
SDK_PROJECT_ID = "naturalessentials-careers"
SDK_PRIVATE_KEY_ID ="ee3c3842c462455bc8d8921b6a9631dc31ba15f6"
SDK_CLIENT_EMAIL = "firebase-adminsdk-marvb@naturalessentials-careers.iam.gserviceaccount.com"
SDK_CLIENT_ID = "107891008916245519000"
SDK_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDOl8CVOgRy9NtZ\nQlZn5/QeIC5Bui6AGwkI9cSqragxRODzF0AmFSahdA53zsm6z75ToMyZzjk4zv2N\nsylqGy+21aczkIQY1u1qwEUgJzgz7UQXfobCrXqsQwsz8BSFyWrAZc7PcwMNPrsV\nAIeA/ByCD3oC//rxti1i7npZylbwvk9KCw2qXvzFlT8kFCL1E74bUEl2lmtY55ds\nrg+e1ODT/aV0cWfBt/ssnV8Lc5H/RHipZnla7SEGli6yAV98iTy5zNCq2ML29X+P\njHIrEEJj3LJoJFXAkmlbLy/YF0vpe2qhNl5DNX5mAfsxSdBeqy8sEvIXEX0YVF0T\nFzGTEho9AgMBAAECggEAIdHM2ID5Zno4CEooS/U4TNA20lKwtw718S4OhmRMQtiE\nPLdDLJjMzKRrk+hZtMe6YAVUSR9t1aNo9Y/tSS3vJy6dov7W6RwSHKYiCsvw0utV\n+MShOfBdQyLsjBGSwn4BCEMCUoqA5uOsi5kdFZvv7Mis0B3ojjYlAuuIQvexONKb\nTl03oSReaI1xsmEDIy3xGZ9GuvcP7HT4SAFjLQ+ULeN4TVS+ubuzOS1K7gJpwYSa\nroSez8UaTHX4eRI3CgXBUhHwEvzhEKCxQAVSfn94CtnQzpxv228Q94A5m/2RLoo+\nu8oqq5t/+gjymmFIqHj/jjvCjZDjrGHS9KRmoQTLAQKBgQDzBVXgbFqvB9kqt9cf\nNABeYZVaQas6fgh0jTpt5zHrv1JAWIQYcikWeEU9o20gtuI4lt9ZeXv4Fnu3ARB2\nfLc+epRoSSlR/EFR+unESJbUqiKSW/B7AMGF71dFSJLoWAmAHsbW/7tyNtI/c0NS\nqS66CodgugB7xaHNbzmZjuA5vQKBgQDZoFwgBreopOLihTRgWEkFLkwl7X5la/oe\nO3tuHiDYh/EUFF+nUzkEKDdXjZ98J0Rh8/pI+RpZeJX0C5lY22+mp6gf6lqr5MTQ\nA44DwVTS5z8gXA/P605CjmDtaC1NOBjAGDSyx96D4rYqsPa6wL7BrHv0mLK40yUc\n6fmBaMwqgQKBgQCr9iyMP1/z1pPe3HOGit9v6ZEraqhlHWWSQ5UCy8PRU3I6QehG\n/BEC61vjf87qhT6SWH/26jXEmPQ1zLT/gsSPm2GEYbCxaNQ31FqyH8NK/JC2DASg\npSpLQc75IZ+CdTlTxXNiE1dqPEyNxVvwE/MShfzBfxx0eKZDnd6eQDF96QKBgQCl\nhL6sqQ9El+vsJy233U3kP9swuZn5n49DMTBmh0mqBnLIN9qsk7J4w/GbiJ51OhRb\nf8mreLKevAUo8S13lKYtlbRcWc0OkddS8nEvz/oo0jKD9SEdnTUPj+SOjD5wTasd\nZwulsjg+DM9KVv/A+FndSceZOA4uXoEKpbXbxA4MgQKBgQDBJgxrZkjqCu8nETnW\nO6i9bhd/Y45/aJxffT2fRfPcjLR3MxWZ/ML8kJvny7L+ZnlEd2BM8Zvzl43+ws/9\ngn2hNl0F9SUBbKlTV/j7qg1KKGCayQf+ndEt2PA9OqpLUwgJlOCJWRVOXS6OKqO+\n8HR8hQrXtWOsYaGvgIQtl4kzoQ==\n-----END PRIVATE KEY-----\n"
SDK_AUTH_URI = "https://accounts.google.com/o/oauth2/auth"
SDK_TOKEN_URI = "https://oauth2.googleapis.com/token"
SDK_AUTH_PROVIDER_X509_CERT_URL = "https://www.googleapis.com/oauth2/v1/certs"
SDK_CLIENT_X509_CERT_URL = "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-marvb%40naturalessentials-careers.iam.gserviceaccount.com"
DB_URL = "https://naturalessentials-careers-default-rtdb.firebaseio.com"



if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      type: SDK_TYPE,
      project_id: SDK_PROJECT_ID,
      private_key_id: SDK_PRIVATE_KEY_ID,
      private_key: SDK_PRIVATE_KEY,
      client_email: SDK_CLIENT_EMAIL,
      client_id: SDK_CLIENT_ID,
      auth_uri: SDK_AUTH_URI,
      token_uri: SDK_TOKEN_URI,
      auth_provider_x509_cert_url: SDK_AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url: SDK_CLIENT_X509_CERT_URL,
    }),
    databaseURL: DB_URL,
    databaseAuthVariableOverride: {
      uid: 'careers-app-service-worker',
    },
  });
}


exports.handler = async (event) => {


  


  const data = JSON.parse(event.body);

  data.submittedAt = Date.now();

  const db = getDatabase();

  const ref = db.ref('applicants');

  const newApplicantRef = ref.push();


  return newApplicantRef
    .set(data)
    .then(() => {
      console.log('Saved: ', newApplicantRef.key);
      return {
        statusCode: 200,
        body: JSON.stringify({ msg: 'Success' }),
      };
    })
    .catch((error) => {
      console.log('Problems saving:', error.message);
      return {
        statusCode: 400,
        body: JSON.stringify({ msg: error.message }),
      };
    });

    
};
