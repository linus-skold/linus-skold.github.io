const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		const cb = entry.isIntersecting ? entry.target.classList.add : entry.target.classList.remove;
		cb('show');
	});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));