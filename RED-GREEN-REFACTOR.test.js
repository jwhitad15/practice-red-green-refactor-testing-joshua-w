const hello = require('./RED-GREEN-REFACTOR.js');
let invalidNumberInput = "Numbers may not be included with this input";

describe('hello', function() {

    test('should return a message to the user stating that numbers may not be included.',
        function () {
            expect(hello(Number())).toBe('INVALID INPUT: Numbers may not be included.');
        });
    
    test('should return a custom message when a name is provided',
        function () {
            expect(hello('Joshua')).toBe('Hi, Joshua!');
        });

    test('should return a custom message when a name is provided',
        function () {
            expect(hello()).toBe('Hi, dude!');
        });

});