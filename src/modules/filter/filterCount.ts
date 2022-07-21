import noUiSlider from 'nouislider';

const sliderYear = document.querySelector('.slider-count') as HTMLElement;

noUiSlider.create(sliderYear, {
  start: [0, 50],
  connect: true,
  range: {
    min: 0,
    max: 50,
  },
  tooltips: true,
  step: 1,
});
