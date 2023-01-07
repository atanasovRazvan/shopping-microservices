const { google } = require('googleapis');
const { REFRESH_TOKEN, GOOGLE_SECRET, GOOGLE_CLIENT_ID, USER_EMAIL } = require("./config");
const nodemailer = require('nodemailer');

const OAuth2 = google.auth.OAuth2;
const OAuth2_client = new OAuth2(GOOGLE_CLIENT_ID, GOOGLE_SECRET, "https://developers.google.com/oauthplayground");
OAuth2_client.setCredentials({ refresh_token: REFRESH_TOKEN })

const send_email = async (sender, receiver, subject, mailContent) => {
    const accessToken = OAuth2_client.getAccessToken();

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: USER_EMAIL,
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken
        }
    });

    const mail_options = {
        from: sender,
        to: receiver,
        subject: subject,
        html: mailContent
    }

    console.log("Sending email...");
    await transport.sendMail(mail_options)
        .then(() => {
            console.log("success");
        })
        .catch((e) => {
            console.log(e.message);
        })
        .finally(() => {
            transport.close();
        });
}

module.exports = send_email;
