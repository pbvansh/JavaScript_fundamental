
const inputString = 'col1,col3,col2\na\nc,d,t'

let row1 = inputString.split('\n');

const title = row1[0].split(',')
const data = row1.splice(1);
console.log(data);
let arrOfObj = [];
for (let i = 0; i < data.length; i++) {
    const value = data[i].split(',');
    let newObj = {}
    for (let i = 0; i < title.length; i++) {
        newObj[title[i]] = value[i] ? value[i] : '--'
    }
    arrOfObj.push(newObj)
}
console.log(arrOfObj); 
// [
//     { col1: 'a', col3: '--', col2: '--' },
//     { col1: 'c', col3: 'd', col2: 't' }
// ]