input = [1, 2, 3, 4, 5];
let comb = [[]]
input.reduce((p, c) => {
    input.push([p, c])
    return c;

})
console.log(input);
// [[], [1], [2], [3], [1, 2], [1, 3], [2, 3]]