const { spawn } = require('child_process');

const child = spawn('demo.js');

child.stdout.on('data',(data)=>{
    console.log(data);
})

child.stderr.on('error',(error)=>{
    console.log(error);
})

child.on('error',(error)=>{
    console.log(error);
})

child.on('exit',(code,signal)=>{
    if(code) console.log(`proccess exit with code ${code}`);
    if(signal) console.log(`process exit with signal ${signal}`);
})