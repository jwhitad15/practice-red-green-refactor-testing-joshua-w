function vowelCounter (str) {
    
    // let totalNumber = 0;

        let arrayOfVowels = ["a", "e", "i", "o", "u",];
    let lowerCase = str.toLowerCase();
    let input = lowerCase.split("").reduce((prev, current) => {
            if (arrayOfVowels.includes(current.toLowerCase())) {
                return prev + 1
            } else {
                return prev
            }

    // for (let character of str) {
    //     if (/[aeiou]/gi.test(character.toLowerCase())) {
    //         index++;
    //     }
    // }
    

    // return totalNumber 
}, 0);

    return input;
};

console.log(vowelCounter("aldks alsdkdwer"))
console.log(vowelCounter("djddnd"))
console.log(vowelCounter("Fantastic"))
console.log(vowelCounter("stygrz"))

module.exports = vowelCounter;

