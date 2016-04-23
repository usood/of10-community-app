const send = ( user, profile ) => {
    let data = {
            email: Modules.both.getUserIdentity( user ),
            name: profile && profile.name ? profile.name : "",
            url: Meteor.settings.public.domain
        },
        html = _getHTMLForEmail( 'welcome-email', data );

    _sendEmail( data.email, html );
};

const _getHTMLForEmail = ( templateName, data ) => {
    SSR.compileTemplate( templateName, Assets.getText( `email/templates/${ templateName }.html` ) );
    return SSR.render( templateName, data )
};

const _sendEmail = ( emailAddress, html ) => {
    if ( emailAddress.includes( '@' ) ) {
        Meteor.defer( () => {
            Email.send({
                to: emailAddress,
                from: "The OF10 Community - <work@of10.in>",
                subject: "[OF10 Community] Welcome aboard!",
                html: html
            });
        });
    }
};

Modules.server.sendWelcomeEmail = send;