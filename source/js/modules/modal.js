const page = document.querySelector('.page');
const overlay = document.querySelector('.overlay');
const modalOpenButton = document.querySelector('.nav__button');
const modalCloseButton = document.querySelector('.modal__button');
const modal = document.querySelector('.modal');
const nameField = document.querySelector('.modal [type="text"]');

// focus trap for modal
const focusableEls = modal.querySelectorAll('button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="checkbox"]:not([disabled]), input[type="tel"]:not([disabled])');
const firstFocusableEl = focusableEls[0];
const lastFocusableEl = focusableEls[focusableEls.length - 1];
const KEYCODE_TAB = 9;

const openModal = function () {
  if (modal.classList.contains('modal--closed')) {
    modal.classList.remove('modal--closed');
    overlay.classList.remove('overlay--closed');
    page.classList.add('overflow');
    nameField.focus();
  }

  modal.addEventListener('keydown', function (event) {
    const isTabPressed = (event.key === 'Tab' || event.keyCode === KEYCODE_TAB);

    if (!isTabPressed) {
      return;
    }

    if (event.shiftKey) /* shift + tab */ {
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        event.preventDefault();
      }
    } else /* tab */ {
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        event.preventDefault();
      }
    }
  });
};

const closeModal = function () {
  if (!modal.classList.contains('modal--closed')) {
    modal.classList.add('modal--closed');
    overlay.classList.add('overlay--closed');
    page.classList.remove('overflow');
    modalOpenButton.focus();
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
