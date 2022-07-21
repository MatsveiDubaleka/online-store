import data from '../data/data';
import { IData } from '../data/IData';
import { generationCard } from '../generation/generation';
import { showWarn } from '../warn/warn';

const searchInput = document.querySelector('#search-input') as HTMLInputElement;
searchInput.focus();

searchInput.addEventListener('keyup', () => {
  searchName(data, searchInput.value);
});

function searchName(arr: Array<IData>, value: string) {
  const dataClone = [...arr];
  const searchData: Array<IData> = [];
  dataClone.forEach((data) => {
    if (data.name.toLowerCase().includes(value.toLowerCase())) {
      searchData.push(data);
    } else {
      showWarn('Извините, совпадений не обнаружено');
      return;
    }
  });
  searchGeneration(searchData);
}

function searchGeneration(arr: Array<IData>) {
  const imageContainer = document.querySelector(
    '.image-container'
  ) as HTMLElement;
  imageContainer.innerHTML = '';
  arr.map((data) => generationCard(data));
}
