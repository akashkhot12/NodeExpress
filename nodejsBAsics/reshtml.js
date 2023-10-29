const http = require('http');
const fs = require('fs');
const { error } = require('console');
const { response } = require('express');
const url = require('url');

const html = fs.readFileSync('./resHtml.html', 'utf-8')
const product = JSON.parse(fs.readFileSync('../files/product.json', 'utf-8'));
const product_list = fs.readFileSync('../templates/product-list.html', 'utf-8');
let productHtmlArray = product.map((prod) => {
    let output = product_list.replace('{{IMAGES}}', prod.productImage);
    output = product_list.replace('{{%NAME%}}', prod.name);
    output = product_list.replace('{{%MODELNAME%}}', prod.modelName);
    output = product_list.replace('{{%MODELNO%}}', prod.modelNumber);
    output = product_list.replace('{{%SIZE%}}', prod.size);
    output = product_list.replace('{{%CAMERA%}}', prod.camera);
    output = product_list.replace('{{%PRICE%}}', prod.price);
    output = product_list.replace('{{%COLOR%}}', prod.color);
    output = product_list.replace('{{%ID%}}', prod.id);

    return output;
})

const server = http.createServer((req, res) => {
    let { query, pathname: path } = url.parse(req.url, true)
    // console.log(x);
    if (path == '/' || path.toLocaleLowerCase() === '/home') {
        res.writeHead(200, {
            'Content-type': 'text/html',
            'my-header': 'hello,world'
        });
        res.end(html.replace('{{%content%}}', product_list))
    }
    else if (path.toLocaleLowerCase() === '/about') {
        res.writeHead(200);
        res.end(html.replace('{{%content%}}', 'your are in about page'))
    }
    else if (path.toLocaleLowerCase() === '/contact') {
        res.writeHead(200);
        res.end(html.replace('{{%content%}}', 'your are in contact page'))
    }
    else if (path.toLocaleLowerCase() === '/product') {
        if (!query.id) {
            let productResponse = html.replace('{{%content%}}', productHtmlArray.join(','))
            res.writeHead(200, {
                'Content-type': 'text/html'
            });
            res.end(productResponse);
        }
        else {
            res.end('this is a product with ID : ' + query.id)
        }

    }
    else {
        res.writeHead(404);
        res.end(html.replace('{{%content%}}', 'error 404: something wrong'))
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log("server is running");
})