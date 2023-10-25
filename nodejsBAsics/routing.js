const http = require('http');
const fs  =  require('fs');

const html  = fs.readFileSync('./index.html','utf-8')

const server = http.createServer((req,res)=>{
    let path = req.url;
    if (path =='/' || path.toLocaleLowerCase()==='home') {
        res.end("your home page ready")
    }
    else if(path.toLocaleLowerCase()==='/about'){
        res.end("your about page is ready")
    }
    else if(path.toLocaleLowerCase()==='/constact'){
        res.end("your contact page is ready")
    }
})

server.listen(8000,'127.0.0.1',()=>{
    console.log("server is running");
})