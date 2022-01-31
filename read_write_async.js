const fs = require('fs');
// Non-blocking, asynchronous way
fs.readFile('./txt/input.txt', 'utf-8',(err, data1)=>{
    if(err){
        return console.log('ERROR!');
    }
    fs.readFile(`./txt/${data1}.txt`, 'utf-8',(err, data2)=>{
        console.log(data2);
        fs.readFile('./txt/append.txt', 'utf-8',(err, data3)=>{
            console.log(data3);
            fs.writeFile('./txt/joint.txt',`${data3}n/ n/ ${data2}`,'utf-8', err=>{
                console.log("File has been witten ...");
            })
        }) 
    }) 
})
console.log("WIll read file")