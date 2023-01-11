
const inputString1 = [{ 'col1': 'a', 'col2': 'b' }, { 'col1': 'c', 'col2': 'd', col3: 'x' }, { 'col1': 'q', 'col2': 'w', col4: 1 }]

const titleObj = new Set();
inputString1.forEach((val) => {
    for (const key in val) {
        titleObj.add(key)
    }
})

let str = [...titleObj].toString().concat("\\n")

inputString1.forEach((obj, i) => {
    str = str + "," + Object.values(obj).toString()
    if (Object.values(obj).length < titleObj.size) {
        let val = '';
        for (let i = 0; i < titleObj.size - Object.values(obj).length; i++) {
            val += ',-';
        }
        str+=val;
    }
    str = str.concat("\\n");
})

str = str.slice(0, -2)
console.log(str);