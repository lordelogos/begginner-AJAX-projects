// api for use https://randomuser.me/api/

// required dom elements
let btn = document.querySelector('#gen');
let person = document.querySelector('#container');
let pic = document.querySelector('#profile');
let attribs = document.querySelector('#props');

//click event
btn.addEventListener('click', getUser);

//getUser function

function getUser(e){
	e.preventDefault();
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://randomuser.me/api', true);

	xhr.onload = (e) => {
		let user = JSON.parse(e.target.responseText).results[0];
		console.log(user);
		pic.src = ''+ user.picture.large+'';
		attribs.innerHTML = `
				<li>First Name: <span class="specs">${user.name.first}</span></li>
				<li>Last Name <span class="specs">${user.name.last}</span></li>
				<li>Location: <span class="specs">${user.location.state + ' '+ user.location.city}</span></li>
				<li>Phone: <span class="specs">${user.phone}</span></li>
				<li>Email: <span class="specs">${user.email}</span></li>
		`
	};

	xhr.onerror = () => {
		console.log('error')
	};

	xhr.send();
}

