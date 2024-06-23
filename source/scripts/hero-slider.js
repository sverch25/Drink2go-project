export default function heroSlider() {

  const nextButton = document.querySelector('.slider-button-next');
  const prevButton = document.querySelector('.slider-button-prev');
  const pagination = document.querySelector('.hero__slider-pagination');
  const paginationElements = Array.from(pagination.querySelectorAll('div'));
  const slider = document.querySelector('.hero__slider-list');
  const slides = Array.from(slider.querySelectorAll('li'));
  const slideCount = slides.length;
  let slideIndex = 0;

  prevButton.addEventListener('click', showPreviousSlide);
  nextButton.addEventListener('click', showNextSlide);

  function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
    thisSlide(slideIndex);
    removeDisabled();
  }

  function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
    thisSlide(slideIndex);
    removeDisabled();
  }

  function updateSlider() {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = 'flex';
      } else {
        slide.style.display = 'none';
      }
    });
    if (slideIndex === 0) {
      prevButton.setAttribute('disabled', 'true');
    } else if (slideIndex === slideCount - 1) {
      nextButton.setAttribute('disabled', 'true');
    }
  }

  function removeDisabled() {
    if (slideIndex !== 0) {
      prevButton.removeAttribute('disabled');
    } else if (slideIndex !== slideCount - 1) {
      nextButton.removeAttribute('disabled');
    }
  }

  function thisSlide(index) {
    paginationElements.forEach((item) => item.classList.remove('active-btn'));
    paginationElements[index].classList.add('active-btn');
  }

  paginationElements.forEach((element, index) => {
    element.addEventListener('click', () => {
      slideIndex = index;
      thisSlide(slideIndex);
      updateSlider();
      removeDisabled();
    });
  });

  updateSlider();
}
