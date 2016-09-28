function compile(template){
	var evalExpr = /<%=(.+?)%>/g;	
	var expr = /<%([\s\S]+?)%>/g;

	template = template
		.replace(evalExpr, '`); \n echo($1); \n echo(`')
		.replace(expr, '`); \n $1 \n echo(`');

	template = 'echo(`' +template + '`);';

	var script = 
	`(function parse(data){
		var output = "";

	function echo(html){
		output += html;
	}

	${ template }
	
	return output;
	})`;

	return script;
}

var template = `
	<ul>
		<% for(var i=0; i < data.supplies.length; i++){ %>
			<li><%= data.supplies[i] %></li>
		<% } %>
	</ul>
`;
var parse = eval(compile(template));
var str=parse({supplies:["broom", "mop", "cleaner"]})
console.log("str:"+str);
//console.log("compile:"+compile(template));
