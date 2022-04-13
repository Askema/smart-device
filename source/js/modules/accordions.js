const accordions = document.querySelectorAll('.footer__accordion');
const accordionTitles = document.querySelectorAll('.footer h2');
const accordionLists = document.querySelectorAll('.footer__list');

accordionLists.forEach(function (list) {
  list.classList.remove('footer__list--opened');
});

accordions.forEach(function (accordion) {
  const tab = accordion.querySelector('.footer h2');
  const list = accordion.querySelector('.footer__list');

  tab.addEventListener('click', function () {
    if (tab.classList.contains('title-opened')) {
      tab.classList.remove('title-opened');
    } else {
      accordionTitles.forEach(function (btn) {
        btn.classList.remove('title-opened');
      });
      tab.classList.add('title-opened');
    }

    if (list.classList.contains('footer__list--opened')) {
      list.classList.remove('footer__list--opened');
    } else {
      accordionLists.forEach(function (element) {
        element.classList.remove('footer__list--opened');
      });
      list.classList.add('footer__list--opened');
    }
  });
});
