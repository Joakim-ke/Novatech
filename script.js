const slider = document.querySelector('.box-container');
const prevButton = document.querySelector('.slider-btn.prev');
const nextButton = document.querySelector('.slider-btn.next');

if (slider && prevButton && nextButton) {
  const slideAmount = slider.offsetWidth * 0.75;

  prevButton.addEventListener('click', () => {
    slider.scrollBy({ left: -slideAmount, behavior: 'smooth' });
  });

  nextButton.addEventListener('click', () => {
    slider.scrollBy({ left: slideAmount, behavior: 'smooth' });
  });
}
