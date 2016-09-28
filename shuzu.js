let [foo, [[bar], barz]] = [1, [[2], 3]];
console.log("foo:", foo);
console.log("bar:", bar);
console.log("barz:", barz);

let [,,third] = ['foo', 'bar', 'baz'];
console.log("third:", third);

let [x, , y] = [1, 2, 3];
console.log("x:", x);
console.log("y:", y);

let [ head, ...tail] = [1, 2, 3, 4];
console.log("head:", head);
console.log("tail:", tail);

let [ m, n, ...q] = ['a'];
console.log("m:", m);
console.log("n:", n);
console.log("q:", q);
