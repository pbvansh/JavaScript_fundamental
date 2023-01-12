const { fork } = require('child_process');

const child = fork('demo.js')
child.unref()

child.on('message', function (msg) {
    console.log('child message: ' + msg);
})

child.on('close', function (code) {
    console.log(`child proccess exit with code : ${code}`);
})