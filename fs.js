const fs = require('fs');

fs.writeFileSync('hello.txt', 'hello my name is pratik.')

fs.appendFile('hello.txt', " I'm from kodinar.", (err) => {
    if (err) console.log(err);
});

fs.writeFile('hello.txt', ' I am node js intern', { flag: 'a' }, (err) => {
    if (err) console.log(err)
    else {
        const data = fs.readFileSync('hello.txt', 'utf-8');
        fs.copyFileSync('hello.txt', 'copy.txt');
        console.log(data);
    }
})


setTimeout(() => {
    fs.renameSync('hello.txt', 'intro.txt')
}, 2000)

setTimeout(() => {
    fs.unlinkSync('intro.txt')
}, 5000)



