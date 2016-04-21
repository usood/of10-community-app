import { ServiceConfiguration } from 'meteor/service-configuration';
import { Meteor } from 'meteor/meteor';

const services = Meteor.settings.private.oAuth;

const configure = () => {
    if ( services ) {
        for( let service in services ) {
            ServiceConfiguration.configurations.upsert( { service: service }, {
                $set: services[ service ]
            });
        }
    }
};

Modules.server.configureServices = configure;