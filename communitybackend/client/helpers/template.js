Template.registerHelper( 'userIdentity', () => {
    return Modules.both.getUserIdentity( Meteor.user() );
});

Template.registerHelper( 'isCurrentUser', ( currentUser ) => {
    return currentUser === Meteor.userId() ? true : false;
});

Template.registerHelper( 'disableIfAdmin', ( userId ) => {
    if ( Meteor.userId() === userId ) {
        return Roles.userIsInRole( userId, 'admin' ) ? "disabled" : "";
    }
});

Template.registerHelper( 'selected', ( v1, v2 ) => {
    return v1 === v2 ? true : false;
});