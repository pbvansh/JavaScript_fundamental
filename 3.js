inputString1 = [{ 'col1': 'a', 'col2': 'b' }, { 'col1': 'c', 'col2': 'd', col3: 'x' }, {'col1' : 'q','col2' : 'w'}]

const titleObj = inputString1.reduce((a, b) => {
    if(Object.keys(a).length > Object.keys(b).length){
        return a;
    } return b;
})

let str = Object.keys(titleObj).toString().concat("\\n")

inputString1.map((obj) => {
    str = str + "," + Object.values(obj).toString().concat("\\n");
})

str = str.slice(0, -2)
console.log(str);

