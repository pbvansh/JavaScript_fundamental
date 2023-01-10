input = [1, 2, 3,4,5];
let comb = [[]]
input.reduce((p, c, i) => {
    comb.push([p]);
    [...input.slice(input.indexOf(c)), 0].reduce((a, b) => {
        comb.push([p, a])
        return b;
    })
    if (i == input.length - 1) {
        comb.push([c]);
    } else {
        comb.push([p, ...input.slice(input.indexOf(c))])
    }
    return c;
})
console.log(comb);
// [[], [1], [2], [3], [1, 2], [1, 3], [2, 3]]
