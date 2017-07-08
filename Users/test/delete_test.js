const assert = require("assert");
const User = require('../src/user');

describe('Deleting a user', () => {
    let joe;
    beforeEach((done) => {
        joe = new User({ name: 'Joe'});
        joe.save()
            .then(() => done());
    });

    it('model insatance remove',(done) => {
        // this removes only specific instance that you select "joe."
        joe.remove() // this will return a promises
        // then we find name if it is removed or not
            .then(() => User.findOne({ name: 'Joe'})) // it will return a promises
            // then we check is there user or not
            .then((user) => {
                assert(user === null);
                done();
            });  
    }); 

    it('class method reomve',(done) => {
        // Remove a bunch of records with some given criteria
        User.remove({ name: 'Joe'})
        // then we find name if it is removed or not
            .then(() => User.findOne({ name: 'Joe'})) // it will return a promises
            // then we check is there user or not
            .then((user) => {
                assert(user === null);
                done();
            });  

    });

    it('class method findOneAndRemove',(done) => {
        User.findOneAndRemove({ name: 'Joe' })
        // then we find name if it is removed or not
            .then(() => User.findOne({ name: 'Joe'})) // it will return a promises
            // then we check is there user or not
            .then((user) => {
                assert(user === null);
                done();
            });  
    });

    it('class method findByIdAndRemove',(done) => {
        User.findByIdAndRemove(joe._id)
        .then(() => User.findOne({ name: 'Joe'})) // it will return a promises
            // then we check is there user or not
            .then((user) => {
                assert(user === null);
                done();
            });  
    });
});