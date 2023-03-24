export function initModal(e) {
	const modal = document.createElement('div');
	modal.classList.add('modal-screen');

	const content = `
			<div class="modal">
				<div class="close"><i class="fa fa-times" aria-hidden="true"></i></div>
				<h2>We are sorry. Site is under construction.</h2>
				<p>Please try again later.</p>
			</div>
	`;
		
	modal.innerHTML = content;
	document.body.append(modal);
	
	const closeButton = modal.querySelector('div.close');
	closeButton.addEventListener('click', function() {
		modal.remove();
	});

	modal.addEventListener('click', event => {
		if (event.target.classList.contains('modal-screen')) {
			modal.remove();
		}
	});
}

export function initButton() {
	const buttons = document.querySelectorAll('a');
	if (!buttons.length) {
		console.error('No buttons!')
		return;
	}
		buttons.forEach(button => {
			button.addEventListener('click', initModal);
		});
}

export function hamburgerMenu() {

	const button = document.querySelector('a[js-hamburger-button]');
	const menu = document.querySelector('div[js-hamburger-menu]');

	button.removeEventListener('click', initModal);

	button.addEventListener('click', function() {
		const event = new Event('hamburgerButton');
		menu.dispatchEvent(event);
	})

	menu.addEventListener('hamburgerButton', function() {
		if (menu.classList.contains('open')) {
			menu.classList.remove('open');
			return;
		}
			menu.classList.add('open');
			return;
	})
}

// hamburgerMenu();

