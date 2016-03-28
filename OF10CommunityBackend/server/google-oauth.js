const settings = Meteor.settings.google;

if (settings) {
    ServiceConfiguration.configurations.remove({
        service: 'google'
    });

    ServiceConfiguration.configurations.insert({
        service: 'google',
        clientId: settings.clientId,
        secret: settings.secret
    });
}