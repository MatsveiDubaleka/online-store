import noUiSlider from 'nouislider';
import data from '../data/data';
import { IData } from '../data/IData';
import { filterGeneration } from './filterGeneration';

const sliderYear = document.querySelector('.slider-year') as HTMLElement;

const slider = noUiSlider.create(sliderYear, {
  start: [1940, 2020],
  connect: true,
  range: {
    min: 1940,
    max: 2020,
  },
  step: 10,
  tooltips: true,
});

slider.on('change', (value) => {
  filterYear(value);
});

function filterYear(value: (string | number)[]) {
  const dataClone = [...data];
  const newData: Array<IData> = [];

  const minValue = value[0];
  const maxValue = value[1];

  dataClone.forEach((data) => {
    if (data.year >= minValue && data.year <= maxValue) {
      newData.push(data);
    }
  });
  filterGeneration(newData);
}
