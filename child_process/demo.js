console.log('from demo js');

for (let i = 0; i < 1000; i++) {
    console.log(i);
    
}

process.send('hello from child proccess')