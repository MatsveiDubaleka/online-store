import data from '../data/data';
import { IData } from '../data/IData';
import { generationCard } from '../generation/generation';

const inputEldest = document.getElementById('sort-eldest') as HTMLElement;
const inputNewest = document.getElementById('sort-newest') as HTMLElement;

inputEldest.addEventListener('click', () => {
  sortYear('old');
});

inputNewest.addEventListener('click', () => {
  sortYear('new');
});

function sortYear(compare: string) {
  const dataClone = [...data];
  dataClone.sort((a: IData, b: IData) => {
    if (compare === 'old') {
      return Number(a.year) - Number(b.year);
    } else if (compare === 'new') {
      return Number(b.year) - Number(a.year);
    }
    return 0;
  });
  const imageContainer = document.querySelector(
    '.image-container'
  ) as HTMLElement;
  imageContainer.innerHTML = '';
  dataClone.map((data: IData): void => generationCard(data));
}
