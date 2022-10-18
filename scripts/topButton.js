const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		topBtn.style.display = "block";
	}else {
		topBtn.style.display = "none";
	}
});

topBtn.addEventListener('click', () => {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

topBtn.addEventListener('mouseenter', () => {
	topBtn.style.opacity = ".8";
});

topBtn.addEventListener('mouseleave', () => {
	topBtn.style.opacity = "1";
});

topBtn.addEventListener('click', () => {
	topBtn.style.opacity = "1";
});