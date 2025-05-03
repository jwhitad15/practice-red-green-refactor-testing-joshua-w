const hello = require('./RED-GREEN-REFACTOR.js');

describe('hello', function() {

    test('should return a custom message when a name is provided',
        function () {
            expect(hello('Joshua')).toBe('Hi, Joshua!');
        });

    test('should return a custom message when a name is provided',
        function () {
            expect(hello('Joshua')).toBe('Hi, Joshua!');
        });

});