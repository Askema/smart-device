const page = document.querySelector('.page');
const overlay = document.querySelector('.overlay');
const modalOpenButton = document.querySelector('.nav__button');
const modalCloseButton = document.querySelector('.modal__button');
const modal = document.querySelector('.modal');
const nameField = document.querySelector('.modal [type="text"]');


const openModal = function () {
  if (modal.classList.contains('modal--closed')) {
    modal.classList.remove('modal--closed');
    overlay.classList.remove('overlay--closed');
    page.classList.add('overflow');
    nameField.focus();
  }
};

const closeModal = function () {
  if (!modal.classList.contains('modal--closed')) {
    modal.classList.add('modal--closed');
    overlay.classList.add('overlay--closed');
    page.classList.remove('overflow');
  }
};

if (modalOpenButton) {
  modalOpenButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    openModal();
  });
}

if (modalCloseButton) {
  modalCloseButton.addEventListener('click', function () {
    closeModal();
  });
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    closeModal();
  }
});

if (overlay) {
  overlay.addEventListener('click', closeModal);
}
