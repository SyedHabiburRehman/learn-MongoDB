//import momgoose to work on any data in mongodb
const mongoose = require('mongoose');
// import Promises coz mongoose prefer other promises over it's promises
mongoose.Promise = global.Promise;

// done is used to tell mocha that i have done my work and ready to go to execute another test coz
// mocha executes all test cery fastly so we make sure that our test execute completely then
// execute other test

before((done) => {
    // connecting to mongoose locally and creating User_test database if not created
    mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
// .once execute only once coz we want our connection to be connected only once
    .once('open', () => { done(); })
    .on('error', (error) => {
        console.warn('Warning', error);
    });
})

// when we add Joe instance it deletes all Joe instance in collection if already there before adding
    beforeEach((done) => {
        mongoose.connection.collections.users.drop(() => {
            // Reday to run the next test
            done();
        });
    });