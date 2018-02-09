console.log("Welcome");
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("ul");

var i=3;


function lunghezzaInput(){
	return input.value.length;
}

function ciao(){
	console.log("ciao");
}

function aggiungiElemento(){
		var bottone = document.createElement("button");
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		bottone.appendChild(document.createTextNode("x"));
		li.className="li1";
		li.id=++i;
		bottone.id=i;
		ul.appendChild(li);
		li.appendChild(bottone);
		input.value="";
		li.addEventListener("click", function(){li.classList.toggle("li2");});
		bottone.addEventListener("click", function(){li.style.display="none";});
		
}

function aggiungiDopoClick(){
	if(lunghezzaInput() > 0){
		aggiungiElemento();
	}
}

function aggiungiDopoEnter(){
	if(lunghezzaInput() > 0 && event.which===13){
		aggiungiElemento();
	}
}

button.addEventListener("click", aggiungiDopoClick);

input.addEventListener("keypress", aggiungiDopoEnter);

var uno = document.getElementById("1");	
uno.addEventListener("click", function(){uno.classList.toggle("li2");});
var due = document.getElementById("2");	
due.addEventListener("click", function(){due.classList.toggle("li2");});
var tre = document.getElementById("3");	
tre.addEventListener("click", function(){tre.classList.toggle("li2");});

var button1 = document.getElementById("button1");
button1.addEventListener("click", function(){uno.style.display="none";});
var button2 = document.getElementById("button2");
button2.addEventListener("click", function(){due.style.display="none";});
var button3 = document.getElementById("button3");
button3.addEventListener("click", function(){tre.style.display="none";});

var colore1 = document.getElementById("bottoneColore1");
colore1.addEventListener("input", function(){console.log(colore1.value);
corpo.style.background="linear-gradient(to right, "+colore1.value+" , "+colore2.value+") ";});
var colore2 = document.getElementById("bottoneColore2");
colore2.addEventListener("input", function(){console.log(colore2.value);
corpo.style.background="linear-gradient(to right, "+colore1.value+" , "+colore2.value+") ";});
var corpo = document.getElementById("corpo");
var var1 = "yellow";
var var2 = "yellow";
