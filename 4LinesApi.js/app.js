const { write } = require('fs');
const http = require('http');

const server = http.serverDAta((res,req)=>{
    console.log("app is running");
    console.log(res);
   res.end("this is server")
    
}).listen('7000',()=>{
    console.log("my app is open");
})