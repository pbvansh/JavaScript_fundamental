
const str = 'nO'.toLowerCase();

/^y$|^yes$/i.test(str) ? console.log(true) : /^n$|^no$/i.test(str) ? console.log(false) : null  // false

