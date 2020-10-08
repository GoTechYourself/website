var chai = require('chai')

module.exports.Initialize = () => {

    describe('Feature', async function() {


        describe('Task Example 1', async function() {
        
            let num1 = 1;
            let num2 = 2;

            chai.expect(num1).equal(num2);
        })

        describe('Task Example 2', async function() {
            let num1 = 1;
            let num2 = 2;

            chai.expect(num1).equal(num2);
        })


    })

}