const tmpl = addrs => `
	<table>
	${addrs.map(addr => `
		<tr><td>${addr.first}</td></tr>
		<tr><td>${addr.last}</td></tr>
		<tr><td>${addr.last}</td></tr>
	`).join('')}
	</table>
`;

const data = [
	{ first: '<Jane>', last: 'Bond'},
	{ first: 'Lars', last: '<Croft>'},
	{ first: 'seric', last: '<authur>'},
];

console.log(tmpl(data));
	
