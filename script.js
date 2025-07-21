let theme = localStorage.getItem('theme');
if (theme == null) setTheme('light');
else setTheme(theme);

let themeDots = document.getElementsByClassName('theme-dot');

for (let i = 0; themeDots.length > i; i++) {
	themeDots[i].addEventListener('click', function() {
		let mode = this.dataset.mode;
		console.log('Option clicked:', mode);
		setTheme(mode);
	});
}

function setTheme(mode) {
	let stylesheetPath = '';
	if (window.location.pathname.includes('projects')) stylesheetPath = '../';
	if (mode === 'light') {
		document.getElementById('theme-style').href = stylesheetPath + 'default.css';
	}
	if (mode === 'blue') {
		document.getElementById('theme-style').href = stylesheetPath + 'blue.css';
	}
	localStorage.setItem('theme', mode);
}

document.querySelectorAll('.thumbnail-wrapper').forEach(item => {
	item.addEventListener('click', function() {
		window.location.href = this.getAttribute('data-href');
	});
});