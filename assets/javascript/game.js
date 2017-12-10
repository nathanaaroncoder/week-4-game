

$(document).ready(function() {

var randomNumber = Math.floor(Math.random() * 100) + 1;
var crystalNumber1;
var crystalNumber2;
var crystalNumber3;
var crystalNumber4;
var total = 0;
var currentTotal = $("#total");


function makeCrystal1(){
 crystalNumber1 = Math.floor(Math.random() * 12) + 1
};
function makeCrystal2(){
 crystalNumber2 = Math.floor(Math.random() * 12) + 1
};
function makeCrystal3(){
 crystalNumber3 = Math.floor(Math.random() * 12) + 1
};
function makeCrystal4(){
 crystalNumber4 = Math.floor(Math.random() * 12) + 1
};


function makeRandom(){
	randomNumber = Math.floor(Math.random() * 100) + 1;
	$("#random-number").html(randomNumber);
}

function reset (){
	makeRandom ();
	makeCrystal1();
	makeCrystal2();
	makeCrystal3();
	makeCrystal4();
	total = 0;
}

reset();

var win = 0;
var losses = 0;


function addTo(number){
	total = total + number;
	checkWins();
}


$("#crystal1").on("click", function() {
	addTo(crystalNumber1);
	currentTotal.html(total);
      });

$("#crystal2").on("click", function() {
	addTo(crystalNumber2);
	currentTotal.html(total);
      });

$("#crystal3").on("click", function() {
	addTo(crystalNumber3);
	currentTotal.html(total);
      });

$("#crystal4").on("click", function() {
	addTo(crystalNumber4);
	currentTotal.html(total);
      });


function checkWins(){
	if(total > randomNumber) {
		losses++;
		$("#losses").html(losses);
		reset();
		$("#messages").html("Oh no! You destroyed your crystals! Try again!");
	} else if(total < randomNumber) {
		$("#messages").html("So... Can you match the number?")
	}
	
	if(total === randomNumber){
		wins++;
		$("#wins").html(wins);
		reset();
		$("#messages").html("You are a crystal master!");
	} 
} 


})