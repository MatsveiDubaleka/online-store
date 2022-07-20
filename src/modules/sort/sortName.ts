import data from '../data/data';
import { IData } from '../data/IData';
import { generationCard } from '../generation/generation';

const inputFirstLetter = document.getElementById('sort-first') as HTMLElement;
const inputLastLetter = document.getElementById('sort-last') as HTMLElement;

inputFirstLetter.addEventListener('click', () => {
  sortName('first');
});

inputLastLetter.addEventListener('click', () => {
  sortName('last');
});

function sortName(compare: string) {
  const dataClone = [...data];
  dataClone.sort((a: IData, b: IData) => {
    a.name.trim().toLowerCase();
    b.name.trim().toLowerCase();
    if (compare === 'first') {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      }
    }
    if (compare === 'last') {
      if (a.name < b.name) {
        return 1;
      } else if (a.name > b.name) {
        return -1;
      }
    }
    return 0;
  });
  const imageContainer = document.querySelector(
    '.image-container'
  ) as HTMLElement;
  imageContainer.innerHTML = '';
  dataClone.map((data: IData): void => generationCard(data));
}
