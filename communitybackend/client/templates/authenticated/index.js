Template.index.onCreated( () => {
  Template.instance().subscribe( 'template' );

});

Template.index.events({
  'click .resend-verification-link' ( event, template ) {
    Meteor.call( 'sendVerificationLink', ( error, response ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        let email = Meteor.user().emails[ 0 ].address;
        Bert.alert( `Verification sent to ${ email }!`, 'success' );
      }
    });
  }
});


Template.dashboard.onCreated(() => {

  Template.instance().subscribe( 'posts' );

});

Template.dashboard.helpers({
  count() {
    return Posts.find().count();
  }
});

Template.dashboard.events({
  'click #increment': function(e) {
    e.preventDefault();

    Meteor.call('addPost');
  },

  'click #decrement': function(e) {
    e.preventDefault();

    Meteor.call('deletePost');
  }
})
