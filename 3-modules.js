// CommonJS, every file is a module (by default)
// Modules - encapsulated Code (only share minimum - what we want only)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavour')
require('./7-mind-grenade')

// console.log(data)


// sayHi('suas');
// sayHi(names.john);
// sayHi(names.peter);