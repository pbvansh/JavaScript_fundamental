input = [1, 2, 3, 4, 5];
let comb = [[]]
input.reduce((p, c) => {
    
    [...input.slice(input.indexOf(c))].reduce((a,b)=>{
        console.log(a,b);
        return b;
    })
    // console.log(p,c);
    // comb.push([p,...input.slice(input.indexOf(c))])
    return c;
})
console.log(comb);
// [[], [1], [2], [3], [1, 2], [1, 3], [2, 3]]