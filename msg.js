var total = 30;

var msg = passthru`The total is ${total} (${total*1.05} with tax)`;

function passthru(literals){
  var result = '';
  var i = 0;

  console.log("literals.length:"+literals.length);
  console.log("arguments.length:"+arguments.length);

  while (i < literals.length) {
    console.log("literals[]:"+literals[i]);
    result += literals[i++];
    if (i < arguments.length) {
     console.log("arguments[]:"+arguments[i]);
     result += arguments[i];
    }
  }

  return result;
}

console.log("msg:"+msg);
