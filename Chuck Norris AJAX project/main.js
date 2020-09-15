//   chuck norris api link : https://api.chucknorris.io/jokes/random

let btn = document.querySelector('#click-me');
let display  = document.querySelector('#chie');

btn.addEventListener('click', genJoke);

function genJoke(e){
	e.preventDefault();
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

	xhr.onload = (e) => {
		var info = JSON.parse(e.target.responseText);
		display.textContent = info.value;
		display.style.color = 'black';
	}

	xhr.onerror = () => {
		display.textContent = 'Information could not be retrieved at this time'
		display.style.color = 'red';
	}

	xhr.send()
}