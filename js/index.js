document.addEventListener('DOMContentLoaded', function () {
	let multipleCardCarousel = document.querySelector('#carouselControls');

	if (window.matchMedia('(min-width: 768px)').matches) {
		let carousel = new bootstrap.Carousel(multipleCardCarousel, {
			interval: false, // Disable automatic sliding
			wrap: false // Prevent wrapping at the end
		});

		let carouselInner = document.querySelector('.carousel-inner');
		let carouselItems = document.querySelectorAll('.carousel-item');
		let cardWidth = carouselItems[0].offsetWidth;
		let gap = parseInt(window.getComputedStyle(carouselInner).gap);
		let scrollPosition = 0;

		document
			.querySelector('#carouselControls .carousel-control-next')
			.addEventListener('click', function () {
				if (
					scrollPosition <
					(cardWidth + gap) * (carouselItems.length - 3)
				) {
					scrollPosition += cardWidth + gap;
					carouselInner.scroll({
						left: scrollPosition,
						behavior: 'smooth'
					});
				}
			});

		document
			.querySelector('#carouselControls .carousel-control-prev')
			.addEventListener('click', function () {
				if (scrollPosition > 0) {
					scrollPosition -= cardWidth + gap;
					carouselInner.scroll({
						left: scrollPosition,
						behavior: 'smooth'
					});
				}
			});
	} else {
		multipleCardCarousel.classList.add('slide');
	}
});

document.getElementById('subscribeToast').onclick = function () {
	var toastElList = [].slice.call(document.querySelectorAll('.toast'));
	var toastList = toastElList.map(function (toastEl) {
		return new bootstrap.Toast(toastEl);
	});
	toastList.forEach((toast) => toast.show());
};
