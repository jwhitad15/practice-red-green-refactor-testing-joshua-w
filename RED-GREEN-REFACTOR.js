function hello (name) {
    if (name === undefined) {
        return name = "dude!";
    }
        return 'Hi, ' + name + '!';
}

module.exports = hello;