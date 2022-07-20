// Adding to Basket Items

const btnsAddBasket = document.querySelectorAll('.btn-basket');
const basketNum = document.querySelector('.basket-number') as HTMLElement;
let basketItems = 0;

btnsAddBasket.forEach((btn) => {
  btn.addEventListener('click', () => {
    const basketState = btn.parentElement?.querySelector(
      '.basket-state'
    ) as HTMLElement;
    if (btn.innerHTML === 'Добавить в корзину') {
      btn.innerHTML = 'Удалить из корзины';
      btn.classList.add('cart-success');
      basketItems += 1;
      basketNum.innerText = `${basketItems}`;
      basketState.innerHTML = 'Товар в Корзине';
    } else if (btn.innerHTML === 'Удалить из корзины') {
      btn.classList.remove('cart-success');
      btn.innerHTML = 'Добавить в корзину';
      basketItems -= 1;
      basketNum.innerText = `${basketItems}`;
      basketState.innerHTML = 'Товар не в Корзине';
    }
  });
});
