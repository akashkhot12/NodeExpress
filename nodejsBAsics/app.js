// console.log("hello form node js ");

const readline  =  require('readline')
const l1 =  readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

l1.question("please enter your name : ",(name)=>{
    console.log("your enter key is :" +name);
})