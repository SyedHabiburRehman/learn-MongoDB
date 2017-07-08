// assert just compares two values  
const assert = require('assert');
//import User model to use here
const User = require('../src/user');

// describe tells the what you are doing to do
describe(' Creating records', () =>{
    // "it" is used to test mongoose/mongo command
    it('save a user', (done) => {
        // we add name in scheme in mongodb and save it to joe varaiable
         const joe = new User({ name: 'Joe'});
         // joe created but it is not saved implicitly until se save it explicitly as joe.save()
         joe.save() // it will return promise and
         // .then call onces joe.save executes
            .then(() => {

                assert(!joe.isNew);
                done();
            })
    });
});