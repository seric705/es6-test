let str = 'return ' + '`Hello ${name}!`';
let func = new Function('name', str);
console.log("func:"+func('Jack'));
