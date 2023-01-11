const input = [1,2];

const comb = input.reduce((pre, cur) => {
    pre.map((val)=>{
        pre.push([...val,cur])
    })
    return pre;
}, [[]])

console.log(comb);

