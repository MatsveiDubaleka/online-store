import noUiSlider from 'nouislider';

const sliderYear = document.querySelector('.slider-year') as HTMLElement;

noUiSlider.create(sliderYear, {
  start: [1940, 2020],
  connect: true,
  range: {
    min: 1940,
    max: 2020,
  },
  step: 20,
  tooltips: true,
});
