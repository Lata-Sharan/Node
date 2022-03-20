//Modules   ----- Every file in node is module


const names = require('./names')
const sayHi = require('./utils')
const data = require('./alternative_flavours')
require('./mind_grenad')
console.log(names)
console.log(data)
sayHi('Susan')
sayHi(names.peter)
sayHi(names.john)