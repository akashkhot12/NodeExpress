const { error } = require('console');
const fs  = require('fs');

fs.readFile('../files/starts.txt','utf-8',(error1,data1)=>{
    console.log(data1);
    fs.readFile(`../files/${data1}.txt`,'utf-8',(error2,data2)=>{
        console.log(data2+" this is data run");
    })
})

console.log("reading file");