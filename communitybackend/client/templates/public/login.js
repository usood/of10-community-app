Template.loginOld.onRendered( () => {
  Modules.client.login( { form: "#login", template: Template.instance() } );
});

Template.loginOld.events({
  'submit form': ( event ) => event.preventDefault()
});

Template.login.events({
  'click [data-social-login]' ( event, template ) {
    const service = event.target.getAttribute( 'data-social-login' ),
        options = {
          requestPermissions: [ 'email' ]
        };

    if ( service === 'loginWithTwitter' ) {
      delete options.requestPermissions;
    }

    Meteor[ service ]( options, ( error ) => {
      if ( error ) {
        Bert.alert( error.message, 'danger' );
      }
    });
  }
});
