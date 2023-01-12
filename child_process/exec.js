const { exec } = require('child_process');

exec('ipconfig', (err, stdout, stderr) => {
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