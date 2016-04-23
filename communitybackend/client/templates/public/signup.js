import sanitizeUsername from '../../modules/sanitize-username';

Template.signup.onRendered( () => {
  Modules.client.signup({
    form: "#signup",
    template: Template.instance()
  });
});

Template.signup.events({
  'submit form': ( event ) => event.preventDefault(),
  'keyup [name="username"]' ( event ) {
    let value     = event.target.value,
        formatted = sanitizeUsername( value );
    event.target.value = formatted;
  }
});
