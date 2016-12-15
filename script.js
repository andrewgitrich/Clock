function setDate(){
	var now = new Date();
	var seconds = now.getSeconds();
	var mins = now.getMinutes();
	var hours = now.getHours();

	var secondHand = document.querySelector(".sec-hand");
	var minHand = document.querySelector(".min-hand");
	var hourHand = document.querySelector(".hour-hand");

	

	//(divide each sec into 60 to get a %) * 360 to get the degree for the hand
	var secondsDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = "rotate\(" + secondsDegrees + "deg\)";

	var minsDegree = ((mins / 60) *360) + 90;
	minHand.style.transform = "rotate\(" + minsDegree + "deg\)";
	console.log(minsDegree);

	var hoursDegree = ((hours / 12) *360) + 90;
	hourHand.style.transform = "rotate\(" + hoursDegree + "deg\)";
	

}

//runs setdate every sec
//

setInterval(setDate,1000);
/*
var mins = getMinutes();
	var hours = getHours();*/
	

/*
css:
make a circle in css
make 3 hands for the sec min hour hands in css
make all hands rotate by transfor-origin property 100% (this changes the point of rotational axis)

html:
make a div for each hand, the clock face and wrap it all in another div

js:
get the current date-- new Date(),



*/