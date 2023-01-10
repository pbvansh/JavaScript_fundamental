obj1 = { hair: 'long', beard: true }
obj2 = { beard: true, hair: 'longs' }

obj1 = [].concat(...Object.entries(obj1))
obj2 = [].concat(...Object.entries(obj2))

if (obj1.length == obj2.length) {
    const ans = obj1.every((val, i) => {
        return obj2.includes(val)
    })
    console.log(ans);
} else console.log(false);

