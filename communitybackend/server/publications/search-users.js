Meteor.publish('search', function( search ) {
    check( search, Match.OneOf( String, null, undefined ) );
    let query      = {},
        projection = { limit: 10, sort: { title: 1 } };

    if ( search ) {
        let regex = new RegExp( search, 'i' );

        query = {
            $or: [
                { firstName: regex },
                { lastName: regex },
                { mobileNumber: regex }
            ]
        };

        projection.limit = 100;
    }
    return Meteor.users.find(query, projection);
});