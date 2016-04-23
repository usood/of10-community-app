Meteor.publish( 'user', function() {
    return Meteor.users.find( this.userId, {
        fields: {
            "services.facebook.email": 1,
            "services.github.email": 1,
            "services.google.email": 1,
            "services.twitter.screenName": 1,
            "emails": 1,
            "profile": 1
        }
    });
});

Meteor.publish( 'users', function() {
    let isAdmin = Roles.userIsInRole( this.userId, 'admin' );

    if ( isAdmin ) {
        return [
            Meteor.users.find( {}, { fields: { "emails.address": 1, "roles": 1 } } ),
            Invitations.find( {}, { fields: { "email": 1, "role": 1, "date": 1 } } )
        ];
    } else {
        return null;
    }
});