Accounts.emailTemplates.siteName = "OF10 Community";
Accounts.emailTemplates.from     = "Of10 Community <admin@of10.in>";

Accounts.emailTemplates.verifyEmail = {
    subject() {
        return "[OF10 Community] Verify Your Email Address";
    },
    text( user, url ) {
        let emailAddress   = user.emails[0].address,
            urlWithoutHash = url.replace( '#/', '' ),
            supportEmail   = "support@godunk.com",
            emailBody      = `To verify your email address (${emailAddress}) visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

        return emailBody;
    }
};
