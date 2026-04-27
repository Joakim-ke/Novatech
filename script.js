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


let btn = document.getElementById("openLogin");
let box = document.getElementById("loginBox");
let overlay = document.getElementById("overlay");

btn.onclick = () =>{
  box.classList.add("show") 
  overlay.classList.add("show")
};

overlay.onclick = () =>{
  box.classList.remove("show") 
  overlay.classList.remove("show")
};
