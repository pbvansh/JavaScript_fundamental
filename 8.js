let arr = [
    { name: 'fred', age: 48 },
    { name: 'barney', age: 40 },
    { name: 'Fred', age: 40 }
];


const orders = ['desc', 'desc']

const map = new Map();
arr.forEach((elm) => {
    map.set(elm, JSON.parse(JSON.stringify(elm).toLowerCase()))
})
const shortedArr = [...map.entries()].sort((a, b) => {
    if (a.name > b.name) return orders[0] === 'asc' ? -1 : 1
    else if (a[1].name < b[1].name) return orders[0] === 'asc' ? 1 : -1
    else if (a[1].name == b[1].name) {
        if (a[1].age > b[1].age) return orders[1] === 'asc' ? -1 : 1
        else if (a[1].age < b[1].age) return orders[1] === 'asc' ? 1 : -1
    }
});

for (const keys of shortedArr) {
    console.log(keys[0]);
}
