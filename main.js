const letstalkbtn = document.querySelector('.let');
const getstartbtn = document.querySelectorAll('.get');
const contactSection = document.querySelector('#contact');
const form = document.querySelector('.input');
const darkModeButton = document.querySelector('.theme-toggle');

if (getstartbtn && contactSection) {
getstartbtn.addEventListener('click', () => {
		contactSection.scrollIntoView({ behavior: 'smooth' });
	});
}

learnMoreButtons.forEach((button) => {
	button.addEventListener('click', () => {
		alert('currently not available.');
	});
});




