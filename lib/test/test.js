let should = require('should');
let validate = require('../index');

describe('SMN-Validate', function() {
    describe('validate', function() {
        it('should trigger an error of validation', async function() {
            let params = {
                teste: '12345678901'
            };

            let validation = {
                teste: {
                    maxLength: 10
                }
            };

            try {
                await validate(params, validation);
            } catch (error) {
                should.exist(error);
            }
        });
    });
});
