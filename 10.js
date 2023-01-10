const input = [0, 13, 23, 15, 12]

input.forEach(val => {
    let str;
    if (val == 0 || val == 12) str = `${val}-->12 ${val == 0 ? 'AM' : 'PM'}`;
    else {
        str = `${val}-->${val % 12}${val < 12 ? ' AM' : ' PM'}`
    }
    console.log(str);
});

