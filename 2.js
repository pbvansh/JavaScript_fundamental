inputString = 'col1,col3\na,b,z\nc,d,t'
// console.log(inputString);
// console.log(Object.assign(inputString))

let row1 = inputString.split('\n');
const title = row1[0].split(',')
const data = row1.splice(1);
// console.log(data);
// console.log(title);
let obj = [];
for (let i = 0; i < data.length; i++) {
    const value = data[i].split(',');
    let newObj = {}
    for (let i = 0; i < title.length; i++) {
        newObj[title[i]] = value[i]
    }
    obj.push(newObj)
}
console.log(obj); // [ { col1: 'a', col2: 'b' }, { col1: 'c', col2: 'd' } ]
