//©Andolo

var x = document.getElementById("ta");
x.addEventListener("click", mySecondFunction);


function mySecondFunction() {
var tall = document.getElementById("tall").innerHTML;

var randomTall = Math.floor(Math.random() * 4);
	if (randomTall == 0) {document.getElementById("bilde").src = "img/rk-test1.2-net.gif";}
	if (randomTall == 1) {document.getElementById("bilde").src = "img/reklame 2.jpg"}
	if (randomTall == 2) {document.getElementById("bilde").src = "img/flamer 1.gif"}
	if (randomTall == 3) {document.getElementById("bilde").src = "img/Bakru test 1.png"}
}
var glider= document.getElementById("vol");
glider.oninput= function rangefunction(){
	var range = document.getElementById("vol").value/100;
	var jø =  document.getElementById("jønom");
	jø.style.opacity=range;
console.log (range);
}


