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

Template.registerHelper( 'avatar', function( avatarSize, user ) {
    if ( user && user.md5hash ) {
        var md5hash = user.md5hash;
    } else if ( this.md5hash ) {
        var md5hash = this.md5hash;
    }

    md5hash = md5hash || "3eda6fcd3204ef285fa52176c28c4d3e"; // Equivalent to Gravatar.hash( 'none@none.com' );
    return Gravatar.imageUrl( md5hash, { secure: true, size: avatarSize, d: 'mm', rating: 'pg' } );
});