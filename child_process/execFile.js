const { execFile } = require('child_process')

execFile('demo.bat',(err,stdout,stderr)=>{
    if (err) {
        console.log(err);
    }
    if (stderr) {
        console.log(stderr);
    }
    if (stdout) {
        console.log(stdout);
    }
})