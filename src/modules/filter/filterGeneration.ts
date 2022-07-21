import { IData } from '../data/IData';
import { generationCard } from '../generation/generation';

export function filterGeneration(arr: Array<IData>) {
  const imageContainer = document.querySelector(
    '.image-container'
  ) as HTMLElement;
  imageContainer.innerHTML = '';
  arr.map((data) => generationCard(data));
}
