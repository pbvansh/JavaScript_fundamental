let arr = [
    { name: 'fred', age: 48 },
    { name: 'barney', age: 40 },
    { name: 'Fred', age: 40 }
];


const orders = ['desc', 'asc']

const shortedArr = arr.sort((a, b) => {
    let valueofA = a.name.toLowerCase()
    let valueofb = b.name.toLowerCase()
    if (valueofA > valueofb) return orders[0] === 'asc' ? 1 : -1
    else if (valueofA < valueofb) return orders[0] === 'asc' ? -1 : 1
    else if (valueofA == valueofb) {
        if (a.age > b.age) return orders[1] === 'asc' ? 1 : -1
        else if (a.age < b.age) return orders[1] === 'asc' ? -1 : 1
    }
});

arr.forEach(element => {
    console.log(element);
});