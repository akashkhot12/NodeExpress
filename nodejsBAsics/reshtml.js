const http = require('http');
const fs  =  require('fs');
const { error } = require('console');
const { response } = require('express');

const html  = fs.readFileSync('./resHtml.html','utf-8')

const server = http.createServer((req,res)=>{
    let path = req.url;
    if (path =='/' || path.toLocaleLowerCase()==='/home') {
        res.writeHead(200,{
            'Content-type':'text/html',
            'my-header': 'hello,world'
        });
        res.end(html.replace('{{%content%}}','your are in home page'))
    }
    else if(path.toLocaleLowerCase()==='/about'){
        res.writeHead(200);
        res.end(html.replace('{{%content%}}','your are in about page'))
    }
    else if(path.toLocaleLowerCase()==='/contact'){
        res.writeHead(200);
        res.end(html.replace('{{%content%}}','your are in contact page'))
    }
    else if(path.toLocaleLowerCase()==='/product'){
        res.writeHead(200,{
            'Content-type':'appliaction/json'
        });
        fs.readFile('./product.json','utf-8',(error,data)=>{
            response.end(data)
        })
       
    }
    else{
        res.writeHead(404);
        res.end(html.replace('{{%content%}}','error 404: something wrong'))
    }
})

server.listen(8000,'127.0.0.1',()=>{
    console.log("server is running");
})