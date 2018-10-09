let menu = document.querySelector('#menu');
let icon = document.querySelector('#trigger');

// Close Menu trigger by nav link anchors
function closeMenu() {
	menu.classList.remove('show');
	document.body.style.overflow = 'auto';
	icon.classList.toggle('close');
}

//Triggers to toggle open/close meni
function trigger() {
	if (menu.classList.contains('show')) {
		//close menu
		menu.classList.remove('show');
		document.body.style.overflow = 'auto';
	} else {
		//open menu
		menu.classList.add('show');
		document.body.style.overflow = 'hidden';
	}

	//toggle icon between hamburger (open) to x (close)
	icon.classList.toggle('close');
	icon.classList.toggle('open');
}

// Hide-Show Menu on Scroll
let prevScroll = window.pageYOffset;
window.onscroll = hideMenuOnScroll;

function hideMenuOnScroll() {
	const currentScroll = window.pageYOffset;

	if (prevScroll > currentScroll) {
		//fade-in when scroll up
		document.getElementById('trigger').style.opacity = '1';
	} else {
		//fade-out when scroll down.
		document.getElementById('trigger').style.opacity = '0';
	}

	prevScroll = currentScroll;
}
