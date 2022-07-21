export function showWarn(message: string) {
  const modalWarn = document.createElement('div') as HTMLElement;
  modalWarn.classList.add('modal-warning');
  modalWarn.textContent = message;
  document.body.appendChild(modalWarn);
  setTimeout(() => {
    modalWarn.remove();
  }, 5000);
}
