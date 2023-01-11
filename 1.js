
let obj1 = { hair: 'long', beard: true }
let obj2 = { beard: true, long: 'hair' }

obj1 = Object.entries(obj1)
obj2 = Object.entries(obj2)

if (obj1.length == obj2.length) {
    obj1.forEach((elm, i) => {
        obj1[i] = String(elm);
        obj2[i] = String(obj2[i])
    });
    const ans = obj1.every((val, i) => {
        return obj2.includes(val)
    })
    console.log(ans);
} else console.log(false);