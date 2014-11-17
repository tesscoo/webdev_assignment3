// This is the JS file for Part 1 of Assignment 3
function styles(){
		document.body.style.backgroundColor="pink";
		document.body.style.fontFamily="Palatino";
		document.body.style.color="black";
		}

var prizes = ["A puppy","A new car", "$1 Million", "A free vacation", "One Month's Rent", "A shopping spree", "Your enemy's death by bees"];

function printprizes(){
		var index;
		var prizelist = "<ul>";
		for (index=0; index < prizes.length; index++){
			prizelist += "<li>" + prizes[index] + "</li>";}
		prizelist += "</ul>";
		document.getElementById("prizelist").innerHTML=prizelist;}
		
function randarray(){
		var randprize = prizes[c];
		document.getElementById("prize").innerHTML=("The prize you have won is: " + randprize + "!");
		}
 
function newdoc(){
		var doc=document.open("text/html");
		console.log("doc is...");
		console.log(doc);
		var title="<h1>An Animated Picture of Sushi</h1>";
		doc.open();
		var desc="<p>This is a cute animated picture of Sushi. I found it on Tumblr. I do not own this image.</p>";
		doc.write(title);
		doc.write('<img src="sushi.png" width="150" height="250">');
		doc.write(desc);
		doc.body.style.backgroundColor="yellow";
		doc.body.style.color="black";
		doc.body.style.fontFamily="Palatino";}



		
