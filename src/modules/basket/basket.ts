// Adding to Basket Items

const btnsAddBasket = document.querySelectorAll('.btn-basket');
const basketNum = document.querySelector('.basket-number') as HTMLElement;
let basketItems = 0;

btnsAddBasket.forEach((btn) => {
  btn.addEventListener('click', () => {
    const basketState = (btn.parentElement as HTMLElement).querySelector(
      '.basket-state'
    ) as HTMLElement;
    if (btn.innerHTML === 'Добавить в корзину') {
      if (basketItems >= 20) {
        basketWarning();
        return;
      }
      btn.innerHTML = 'Удалить из корзины';
      btn.classList.add('cart-success');
      basketItems += 1;
      basketNum.innerText = `${basketItems}`;
      basketState.innerHTML = 'Товар в Корзине';
      (btn.parentElement as HTMLElement).classList.add('cart-success');
    } else if (btn.innerHTML === 'Удалить из корзины') {
      btn.classList.remove('cart-success');
      btn.innerHTML = 'Добавить в корзину';
      basketItems -= 1;
      basketNum.innerText = `${basketItems}`;
      basketState.innerHTML = 'Товар не в Корзине';
      (btn.parentElement as HTMLElement).classList.remove('cart-success');
    }
  });
});

function basketWarning() {
  const modalWarn = document.querySelector('.modal-warning') as HTMLElement;
  modalWarn.classList.add('active-warning');
  setTimeout(() => {
    modalWarn.classList.remove('active-warning');
  }, 5000);
}
