const http = require('http');
const fs = require('fs');

// files path 

let html  = fs.readFileSync('./project.html','utf-8');
let product = JSON.parse(fs.readFileSync('./project.json','utf-8'));
let projectList = fs.readFileSync('./project_list.html','utf-8');


let server = http.createServer((req,res)=>{
    let path = req.url;
    if(path=='/'|| path.toLocaleLowerCase()==='/home'){
        res.writeHead(200,{
            'Content-type':'text/html',
            'my-header': 'hello,world'
        })
        res.end("<h1>your are in home page</h1>")
    }
    else  if(path.toLocaleLowerCase()==='/about'){
        res.writeHead(200,{
            'Content-type':'text/html',
            'my-header': 'hello,world'
        })
        res.end(html.replace('{{%content%}}','your are in home page'))
    }
    else  if(path.toLocaleLowerCase()==='/product'){
        res.writeHead(200,{
            'Content-type':'text/html',
            'my-header': 'hello,world'
        })
        res.end("<h1>your are in product page</h1>")
    }
    else  if(path.toLocaleLowerCase()==='/contact'){
        res.writeHead(200,{
            'Content-type':'text/html',
            'my-header': 'hello,world'
        })
        res.end("<h1>your are in contact page</h1>")
    }
    else{
        res.writeHead(404);
        res.end("<h1>error: 404</h1>")
    }

    console.log("server is waiting");
})
 server.listen(9000,'127.0.0.1',()=>{
    console.log("server is starts");
 })