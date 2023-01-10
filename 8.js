const arr = [
    { name: 'fred', age: 48 },
    { name: 'barney', age: 36 },
    { name: 'fred', age: 40 }
];
const ordered_by = ['name', 'age']
const orders = ['asc', 'desc']

Object

arr.sort((a, b) => {
    if (a.name > b.name) return orders[0] === 'asc' ? -1 : 1
    if (a.name < b.name) return orders[0] === 'asc' ? 1 : -1
    if (a.name == b.name) {
        if (a.age > b.age) return orders[1] === 'asc' ? -1 : 1
        if (a.age < b.age) return orders[1] === 'asc' ? 1 : -1
    }
})
console.log(arr);