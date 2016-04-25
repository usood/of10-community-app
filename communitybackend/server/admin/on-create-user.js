Accounts.onCreateUser( ( options, user ) => {
    let profile = options.profile;

    Modules.server.sendWelcomeEmail( user, profile );

    user.md5hash = Gravatar.hash( user.emails[0].address );

    if ( profile ) {
        user.profile = profile;
    }

    return user;
});