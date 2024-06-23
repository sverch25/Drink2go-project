export default function priceSlider() {
  const sliderElement = document.querySelector('.catalog__price__slider');
  const formElement = document.querySelector('.catalog__form');
  const valueElementMin = document.querySelector('.catalog__price-value--min');
  const valueElementMax = document.querySelector('.catalog__price-value--max');
  const inputs = [valueElementMin, valueElementMax];

  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 1000,
    },
    start: [0, 900],
    connect: [false, true, false],
    format: {
      to: function (value) {
        return value;
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
    step: 100,
  });

  sliderElement.noUiSlider.on('update', (values, handle) => {
    inputs[handle].value = values[handle];
  });

  formElement.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter') {
      evt.preventDefault();
    }
  });

  inputs.forEach((input, handle) => {
    input.addEventListener('change', () => {
      sliderElement.noUiSlider.setHandle(handle, input.value);
    });
    input.addEventListener('keydown', (evt) => {
      if (evt.key === 'Enter') {
        sliderElement.noUiSlider.setHandle(handle, input.value);
      }
    });
  });
}
