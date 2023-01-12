const EventEmitter = require('events');
const event = new EventEmitter();

event.on('printName',()=>{
    console.log('Hey, My first name pratik.');
})

event.on('printName',()=>{
    console.log('Hey, My last name vansh.');
})
event.emit('printName');

event.on('sumTwo',(a,b)=>{
    console.log(a+b);
})

event.emit('sumTwo',10,20) // 30