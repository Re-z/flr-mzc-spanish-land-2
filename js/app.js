document.addEventListener('DOMContentLoaded', init);

function init() {
	handleSteps();
}

function handleSteps() {
	let counter = 0;
	const steps = [...document.querySelectorAll('.steps__item')];
	function setActiveStep() {
		steps.forEach(el => {
			el.classList.remove('is-active');
		})
		counter == steps.length-1 ? counter = 0 : counter++;
		steps[counter].classList.add('is-active');
	}
	setInterval(setActiveStep, 1000)
}
