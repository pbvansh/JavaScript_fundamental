let obj = { name: 'JJ', job: 'Programmer', age: 22 };
let renameKey = { name: 'firstName', job: 'Role' };

let str =JSON.stringify(obj).toString()
const arr1 = (Object.entries(renameKey))

arr1.forEach(element => {
   str =  str.replace('"' + element[0] + '"', '"' + element[1] + '"')
});
console.log(JSON.parse(str));
