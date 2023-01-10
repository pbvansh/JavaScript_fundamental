let arr = [
    { name: 'fred', age: 48 },
    { name: 'barney', age: 40 },
    { name: 'Fred', age: 40 }
];

// const myMap = new Map()

arr = JSON.parse(JSON.stringify(arr).toLowerCase());

const ordered_by = ['name', 'age']
const orders = ['desc', 'desc']

arr.sort((a, b) => {
    if (a.name > b.name) return orders[0] === 'asc' ? -1 : 1
    if (a.name < b.name) return orders[0] === 'asc' ? 1 : -1
    if (a.name == b.name) {
        if (a.age > b.age) return orders[1] === 'asc' ? -1 : 1
        if (a.age < b.age) return orders[1] === 'asc' ? 1 : -1
    }
})
console.log(arr);
