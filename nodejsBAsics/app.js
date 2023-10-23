// console.log("hello form node js ");

const readline  =  require('readline')
const l1 =  readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

l1.question("please enter your name : ",(name)=>{
    console.log("your enter key is :" +name);
    l1.close();
})

l1.on('close',()=>{
    console.log("interface is close");
    process.exit(0);
})

// const aksing = require("readline");
// const p1 = aksing.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// p1.question("please enter your name :" ,(name)=>{
//     console.log("your enter key is :"+ name);
// })