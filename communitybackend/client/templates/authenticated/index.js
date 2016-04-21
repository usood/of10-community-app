Template.index.onCreated( () => {
  Template.instance().subscribe( 'template' );

});

Template.dashboard.onCreated(() => {

  this.subscribe('posts');

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
