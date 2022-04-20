const http = require('http');
const fs = require('fs');
const url = require('url');

////////////////////////////////////////
//SERVER
const server = http.createServer((req,res)=>{
    const pathName =req.url;
    if(pathName === '/overview'){
        res.end('This is the OVERVIEW')
    }else if(pathName === '/product'){
        res.end('This is the PRODUCT ')
    }else if(pathName === '/api'){
        fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err,data)=>{
            const productName = JSON.parse(data);
            console.log(productName);
        })
    }
    res.end('Hello from the server!')
})

server.listen(3000, '127.0.0.1',()=>{
    console.log(':::Lisening to request...');
})
