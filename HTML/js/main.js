const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', (e) => {
	e.preventDefault
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
});