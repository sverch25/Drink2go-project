const sliderElement = document.querySelector('.catalog__price__slider');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1000,
  },
  start: [0, 900],
  connect: [false, true, false],
});
