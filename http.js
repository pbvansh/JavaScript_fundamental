const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    res.write('hello from node http server');
    res.write(fs.readFileSync('copy.txt','utf-8'));
    
    res.end()
})

server.listen(5000)