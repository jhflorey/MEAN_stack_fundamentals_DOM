// When an HTML (or XML) file is interpreted by a browser, 
// it also generates what we call the Document Object Model (DOM) – a representation of the entire web page as objects. We can manipulate these objects with JavaScript.
console.log(document.body);
var bod = document.body;
bod = "<h1>Hello World</h1>";

var bod = document.body;
for (var i = 0; i < 10; i++){
	bod = "<p>This has gone through the loop completely:" +i+ "time</p>";
}

var paragraphs = document.getElementsByTagName('p');
console.log(paragraph);
for (var i = 0; i < paragraphs.length; i++){
	console.log(paragraphs[i].addEventListener);
	paragraphs[i].addEventListener('click', function(){
		this.style.background='blue';
	});
}