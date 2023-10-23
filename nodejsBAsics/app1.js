const readline  = require('readline')
const fs =  require('fs')
let textIn = fs.readFileSync("../files/text.txt",'utf-8')
console.log(textIn);