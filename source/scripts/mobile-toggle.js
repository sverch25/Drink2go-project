export default function mobileToggle() {
  const mainNav = document.querySelector('.nav__list');
  const navToggle = document.querySelector('.page-header__icon--menu');
  const menuOpenBtn = document.querySelector('.page-header__menu-icon-open');
  const menuCloseBtn = document.querySelector('.page-header__menu-icon-close');

  navToggle.addEventListener('click', () => {
    if (mainNav.classList.contains('disabled')) {
      mainNav.classList.remove('disabled');
      mainNav.classList.add('active');
      menuOpenBtn.classList.add('visually-hidden');
      menuCloseBtn.classList.remove('visually-hidden');
    } else {
      mainNav.classList.add('disabled');
      mainNav.classList.remove('active');
      menuOpenBtn.classList.remove('visually-hidden');
      menuCloseBtn.classList.add('visually-hidden');
    }
  });
}
