'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModals = document.querySelectorAll('.show-modal');
const toggleFn = function () {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};
const esc = document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) toggleFn();
});
for (let i = 0; i < btnOpenModals.length; i++) {
  console.log(btnOpenModals[i].textContent);
  btnOpenModals[i].addEventListener('click', toggleFn);
}
btnCloseModal.addEventListener('click', toggleFn);
overlay.addEventListener('click', toggleFn);
