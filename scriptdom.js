/*var button = document.getElementsByTagName('button')[0];
button.addEventListener("click", function(){
	console.log("click Me Yooooo!!!!!");
})
*/

var button = document.getElementById('enter');
var input = document.getElementById("userinput");
var ul = document.querySelector('ul');
var button2 = document.getElementById('toggle');
var delete1 = document.getElementById('d1');
var delete2 = document.getElementById("d2");
var delete3 = document.getElementById("d3");

button.addEventListener("click", function () {
	// body...
	console.log(input.value);
	if (input.value.length > 0) {
		var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	}
}) 


input.addEventListener("keypress", function() {
	if (input.value.length > 0 && event.keyCode === 13) {
		var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	}
})


button2.addEventListener("click", function(){
	document.querySelector("li").classList.toggle("done");
})

delete1.addEventListener("click", function(){
	document.querySelector("li").remove("b1");
})

delete2.addEventListener("click", function(){
	document.querySelector("li").remove("o2");
})

delete3.addEventListener("click", function(){
	document.querySelector("li").remove("l3");
})