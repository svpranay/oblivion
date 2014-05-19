
var toSearch = "this snippet defines a function taking two integers";
var counter = 1;
function visitNodes(o) {
	counter++;
	if (o.childNodes.length == 0) {		
		if (o.textContent && o.textContent.indexOf("I just found that it's the") >= 0) {
			console.log("EUREKA!!!! Found it.");
			o.textContent = "EUREKA EUREKA EUREKA!!!";
		} 		
		return true;
	}

	for(var i = 0; i < o.childNodes.length; i++) {
		visitNodes(o.childNodes[i]);
	}
	return true;
}

visitNodes(document);
counter