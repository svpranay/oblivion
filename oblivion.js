var counter = 1;
var nodes = [];
var searchStr = "Buy"; 
function visitNodes(o) {
    counter = counter + 1;
    if (o.childNodes.length == 0) {
	if (o.textContent && o.textContent.indexOf(searchStr) >= 0){
	    nodes.push(o.parentNode);
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
    for (var i = 0; i < nodes.length; i++) {
	var curnode = nodes[i];
	curnode.innerHTML = curnode.innerHTML.replace(searchStr, '<a href="http://www.walmart.com">Walmart Home Page - Pranay</a>');
    }
nodes.length