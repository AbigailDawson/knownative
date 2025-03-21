const fs = require('fs');
const path = require('path');
const { Resend } = require('resend');


async function sendResetPasswordMail(to, resetUrl, username) {

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const filePath = path.join(__dirname, '../../views/templates/reset-password.html');
        let htmlContent = fs.readFileSync(filePath, 'utf8');

        htmlContent = htmlContent
            .replace('{{name}}', username)
            .replace('{{resetLink}}', resetUrl);

        /**
         * @todo update mailoption
         */
        const mailOption = {
            from: 'knownative@resend.dev', // sender address -- sample mail 'knownative@resend.dev'
            to: to, // list of receivers -- for test use your own email
            subject: "KnowNative - Reset Forgotten Password", // Subject line
            html: htmlContent
        }

        const emailData = await resend.emails.send(mailOption);
        console.log("Email sent successfully", emailData?.data?.id);
    } catch (error) {
        console.error("error", error);
        throw new Error('Something went wrong!')
    }
}

module.exports = {
    sendResetPasswordMail
}