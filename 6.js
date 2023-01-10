const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = arr.filter((val,i)=>{
    return arr.indexOf(val)===arr.lastIndexOf(val)
})
console.log(unique); // [ 1, 3, 5 ]