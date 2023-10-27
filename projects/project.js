const http = require('http');
const fs = require('fs');

// files path 

let html  = fs.readFileSync('project.html','utf-8');
let product = json.parse(fs.readFileSync('project.json','utf-8'));
let projectList = fs.readFileSync('project_list.html','utf-8');


let server = http.createServer((req,res)=>{
    let path = req.url;
    console.log("server is waiting");
})
 server.listen(9000,'127.0.0.1',()=>{
    console.log("server is starts");
 })