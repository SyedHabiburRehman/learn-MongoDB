const assert = require('assert');
const User = require('../src/user');


describe('Reading users out of the database', () =>{
    let joe;

    // we add name coz we are dropping our db continously in test_helper file
    // beforeEach is executed everytime  before executing "it" 
    beforeEach((done) => {
    joe = new User({ name: 'Joe'});
    joe.save()
        .then(() => done());
});

    it('finds all users with a name of joe', (done)=>{
        // .find finds all users with name of Joe and returns array of all users with Joe name
        User.find({ name: 'Joe'})
        // .find returns promises and we use it in "users" which is array
            .then((users) => {
                console.log(users[0]._id.toString())
                console.log(joe._id)
                //comparing db Joe and the we created before this "it" by id
                assert(users[0]._id.toString() === joe._id.toString())
                // console.log(users);
                done();
            });
    });

    it('find a user with a particular id', (done) => {
        // .findOne finds a particular user with id of Joe and returns  it if there        
        User.findOne({ _id: joe._id })
            .then((user) => {
                assert(user.name === 'Joe');
                done();
            });
    });
});