// Zorgt ervoor dat de datum weergeven wordt

function datum(){
	var today = new Date();
	document.getElementById('date').innerHTML = today.getDate() + '/' + (today.getMonth()+1);
	var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
	document.getElementById('date').innerHTML = today.getDate() + ' ' + maanden[today.getMonth()];
	var dagen = new Array('zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag');
	document.getElementById('dag').innerHTML = dagen[today.getDay()];
}

function klok() {
	var today = new Date();
	var seconds = today.getSeconds();
	var minutes = today.getMinutes();
	var hour = today.getHours();

// verandert de visualisatie van de tijd op een dag

	if (hour > 5 && hour <= 11) {
		document.getElementById('body').className = 'ochtend';
	} else if (hour > 11 && hour <= 17) {
		document.getElementById('body').className = 'middag';
	} else if (hour > 17 && hour <= 24) {
		document.getElementById('body').className = 'avond';
	} else {
		document.getElementById('body').className = 'nacht';
	}

// animeert de klok op de hele en halve minuten

	if (seconds % 60 == 0) {
		document.getElementById('clock').classList.add('animate');
	} else if (seconds % 60 >= 3) {
		document.getElementById('clock').classList.remove('animate');
	}

	if (seconds % 30 == 0) {
		document.getElementById('clock').classList.add('animate');
	} else if (seconds % 30 >= 3) {
		document.getElementById('clock').classList.remove('animate');
	}

// Voegt een 0 toe 

	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (hour < 10) {
		hour = '0' + hour;
	}

	document.getElementById('clock').innerHTML = hour + ':' + minutes + ':' + seconds;
}

// Laat de klok en datum iedere seconde verversen

klok();
setInterval(klok, 1000);

datum();
setInterval(datum, 1000);











