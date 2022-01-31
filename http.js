const http = require('http');

////////////////////////////////////////
//SERVER
const server = http.createServer((req,res)=>{
    const pathName =req.url;
    if(pathName === '/overview'){
        res.end('This is the OVERVIEW')
    }else if(pathName === '/product'){
        res.end('This is the PRODUCT')
    }
    res.end('Hello from the server!')
})

server.listen(3000, '127.0.0.1',()=>{
    console.log(':::Lisening to request...');
})
