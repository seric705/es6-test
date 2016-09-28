let str = 'name => `Hello ${name}!`';
let func = eval.call(null, str);
console.log("func:"+func('Jack'));
