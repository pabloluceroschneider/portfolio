const experienceItems = document.querySelectorAll('.experience__item');

const loadClass = (entrys) => {
	entrys.forEach((entry) => {
		if (entry.isIntersecting) {
      entry.target.classList.add('animation');
    } else {
			entry.target.classList.remove('animation');
		}
	});
};

const observer = new IntersectionObserver(loadClass, {
	root: null,
	rootMargin: '0px',
	threshold: 1.0
});

experienceItems.forEach((item) => observer.observe(item));
