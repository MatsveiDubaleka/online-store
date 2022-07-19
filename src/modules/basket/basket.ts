// Adding to Basket Items

const btnsAddBasket = document.querySelectorAll('.btn-basket');

btnsAddBasket.forEach((btn) => {
  btn.addEventListener('click', () => {
    const basketState = btn.parentElement?.querySelector(
      '.basket-state'
    ) as HTMLElement;
    if (btn.innerHTML === 'Добавить в корзину') {
      btn.innerHTML = 'Удалить из корзины';
      btn.classList.add('cart-success');
      basketState.innerHTML = 'Товар в Корзине';
    } else if (btn.innerHTML === 'Удалить из корзины') {
      btn.classList.remove('cart-success');
      btn.innerHTML = 'Добавить в корзину';
      basketState.innerHTML = 'Товар не в Корзине';
    }
  });
});
