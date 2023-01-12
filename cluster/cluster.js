const cluster = require('cluster')
const numOfCPU = require('os').cpus().length
const http = require('http')

if (cluster.isMaster) {
    console.log('this is master proccess : ' + process.pid);
    for (let i = 0; i < numOfCPU; i++) {
        cluster.fork()
    }

    cluster.on('exit',worker=>{
        console.log(`Worker process ${process.pid} had died.`);
        cluster.fork();
        console.log('create new worker');
    })
}
else {
    console.log('work start at :' + process.pid);
    http.createServer((req, res) => {
        res.end('procsess : ' + process.pid)
        if (req.url === '/kill') {
            process.exit()
        } else if (req.url === '/') {
            console.log('taken by :' + process.pid);
        }
    }).listen(5000)
}