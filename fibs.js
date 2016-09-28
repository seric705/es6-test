function * fibs(){
	var a = 0;
	var b = 1;
	while (true) {
		yield a;
		[a, b] = [b, a+b];
	}
}

var [first, second, third, fourth, fifth, sixth] = fibs();
console.log("first:"+first+"second:"+second+"third:"+third+"fourth:"+fourth+"fifth:"+fifth+"sixth:"+sixth);
