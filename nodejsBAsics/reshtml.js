const http = require('http');
const fs  =  require('fs');

const html  = fs.readFileSync('./resHtml.html','utf-8')

const server = http.createServer((req,res)=>{
    let path = req.url;
    if (path =='/' || path.toLocaleLowerCase()==='/home') {
        res.end(html.replace('{{%content%}}','your are in home page'))
    }
    else if(path.toLocaleLowerCase()==='/about'){
        res.end(html.replace('{{%content%}}','your are in about page'))
    }
    else if(path.toLocaleLowerCase()==='/contact'){
        res.end(html.replace('{{%content%}}','your are in contact page'))
    }
    else{
        res.end(html.replace('{{%content%}}','error 404: something wrong'))
    }
})

server.listen(8000,'127.0.0.1',()=>{
    console.log("server is running");
})