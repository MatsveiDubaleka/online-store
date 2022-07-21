import noUiSlider from 'nouislider';
import data from '../data/data';
import { IData } from '../data/IData';
import { filterGeneration } from './filterGeneration';

const sliderYear = document.querySelector('.slider-count') as HTMLInputElement;

const slider = noUiSlider.create(sliderYear, {
  start: [0, 20],
  connect: true,
  range: {
    min: 0,
    max: 20,
  },
  tooltips: true,
  step: 1,
});

slider.on('change', (value) => {
  filterCount(value);
});

function filterCount(value: (string | number)[]) {
  const dataClone = [...data];
  const newData: Array<IData> = [];

  const minValue = value[0];
  const maxValue = value[1];

  dataClone.forEach((data) => {
    if (data.count >= minValue && data.count <= maxValue) {
      newData.push(data);
    }
  });
  filterGeneration(newData);
}
