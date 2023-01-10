inputString1 = [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}]

let str = Object.keys(inputString1[0]).toString().concat("\\n")

inputString1.map((obj)=>{
    str = str + ","+Object.values(obj).toString().concat("\\n");
})

str = str.slice(0,-2)
console.log(str);