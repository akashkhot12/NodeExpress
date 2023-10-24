const readline  = require('readline')
const fs =  require('fs')
let textIn = fs.readFileSync("../files/text.txt",'utf-8')
console.log(textIn);


let content  = ` data read form inpute text : ${textIn} /nDate created ${new Date()}`
fs.writeFileSync('../files/write.txt',content);
