const input ={ a: 1, b: '2', c: 3 };
const Rkey= ['b'];

Rkey.forEach((key)=>{
    delete input[key]
})

console.log(input); // { a: 1, c: 3 }