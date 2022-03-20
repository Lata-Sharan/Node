// OS,path, HTTPS, 
const os = require('os')


// info about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`The sytem Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)



const path = require('path')
console.log(path.sep) //returns path separator propoerty
const filePath = path.join('/content/', 'subfolder', 'test.txt') //joins segments of path
console.log(filePath)
const base = path.basename(filePath)
console.log(base)
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)


const { readFileSync, writeFileSync } = require('fs');

//const fs = require('fs'); (another method)
//fs.read

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first, second)
writeFileSync('./content/result-sync.txt',
    `Here is the result: ${first},${second}`, { flag: 'a' })