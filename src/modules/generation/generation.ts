import { IData } from '../data/IData';
import data from '../data/data';

const imageContainer = document.querySelector(
  '.image-container'
) as HTMLElement;

data.forEach((data: IData) => {
  generationCard(data);
});

export function generationCard(toy: IData): void {
  const imageItem = document.createElement('div');
  imageItem.className = 'image-item';
  imageContainer.appendChild(imageItem);

  const toyImage = document.createElement('img');
  toyImage.src = `../assets/images/${toy.num}.png`;
  imageItem.appendChild(toyImage);

  const toyName = document.createElement('p');
  toyName.className = 'toy-name';
  toyName.innerText = `${toy.name}`;
  imageItem.appendChild(toyName);

  const toyCount = document.createElement('p');
  toyCount.className = 'toy-count';
  toyCount.innerText = `Осталось: ${toy.count} шт.`;
  imageItem.appendChild(toyCount);

  const toyYear = document.createElement('p');
  toyYear.className = 'toy-year';
  toyYear.innerText = `Год выпуска: ${toy.year} г.`;
  imageItem.appendChild(toyYear);

  const toyColor = document.createElement('p');
  toyColor.className = 'toy-color';
  toyColor.innerText = `Цвет: ${toy.color}`;
  imageItem.appendChild(toyColor);

  const toyShape = document.createElement('p');
  toyShape.className = 'toy-shape';
  toyShape.innerText = `Форма: ${toy.shape}`;
  imageItem.appendChild(toyShape);

  const toySize = document.createElement('p');
  toySize.className = 'toy-size';
  toySize.innerText = `Размер: ${toy.size}`;
  imageItem.appendChild(toySize);

  const btnBasket = document.createElement('button');
  btnBasket.className = 'btn-basket';
  btnBasket.innerText = 'Добавить в корзину';
  imageItem.appendChild(btnBasket);

  const basketState = document.createElement('p');
  basketState.className = 'basket-state';
  if (basketState.classList.contains('basket-open')) {
    basketState.innerText = 'Товар в корзине';
  } else {
    basketState.innerText = 'Товар не в корзине';
  }
  imageItem.appendChild(basketState);
}
