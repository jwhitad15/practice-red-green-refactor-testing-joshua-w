const vowelCounter = require('./vowelCounter')

describe('vowelCounter', function() {

    test('returns a message stating, "No vowels were identified in the string." ',
        function () {
            expect(vowelCounter()).toBe(0);
        });
    
    test('returns a specific number of vowels included in the string.',
        function () {
            expect(vowelCounter('Joshua')).toBe(3);
        });

    test('should return a custom message stating "y" is considered a vowel on occasion.',
        function () {
            expect(vowelCounter("y")).toBe(1);
        });

});