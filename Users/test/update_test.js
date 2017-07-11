const assert = require("assert");
const User = require('../src/user');

describe('Updating records', () => {
    let joe;
    beforeEach((done) => {
        joe = new User({ name: 'Joe' });
        joe.save()
            .then(() => done());
    });

    // we create a function to save ourselves written again again .then operations
    // 'opearion' recieve promise and chain on two .then
    function assertName(operation, done) {
        operation
            .then(() => User.find({}))
            .then((users) => {
                assert(users.length === 1)
                assert(users[0].name === 'Alex');
                done();
            });
    }
    it('instance type using set n save', (done) => {
        joe.set('name', 'Alex');
        // .save will return a promise we pass this promise to assertName function
        assertName(joe.save(), done);

    });
    it('A model instance can update', (done) => {
        assertName(joe.update({ name: 'Alex' }), done);
    });

    // this will find the record with given criteria then update it
    it('A Model class can update', (done) => {
        // User.update({find specific record}, {update that record})
        assertName(User.update({ name: 'Joe' }, { name: 'Alex' }), done)
    });

// this will find the first record of specifec criteria and update it
    it('A Model class can update one record', (done) => {
        assertName(User.findOneAndUpdate({ name: 'Joe' }, { name: 'Alex' }), done)
    });

// this will update record by an Id
    it('A Model class can find a record with an Id and update', (done) => {
        assertName(User.findByIdAndUpdate(joe._id, { name: 'Alex' }), done)
    })
});