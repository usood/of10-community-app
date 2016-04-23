import { Seed } from 'meteor/themeteorchef:seeder';

let _seedUsers = () => {
    Seed( 'users', {
        environments: [ 'development', 'staging', 'production' ],
        data: [{
            username: 'upaharsood',
            email: 'upaharsood@of10.in',
            password: 'password',
            profile: {
                name: { first: 'Upahar', last: 'Sood' }
            },
            roles: [ 'admin' ]
        },{
            username: 'umangsood',
            email: 'umangsood@of10.in',
            password: 'password',
            profile: {
                name: { first: 'Umang', last: 'Sood' }
            },
            roles: [ 'admin' ]
        }]
    });
};


let _seedChannels = () => {
    Seed( 'channels', {
        environments: [ 'development', 'staging', 'production' ],
        data: [ { name: 'general' } ]
    });
};

export default function() {
    _seedUsers();
    _seedChannels();
}