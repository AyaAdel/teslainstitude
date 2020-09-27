const shadow = document.querySelector('.shadow');
const navbarList = document.querySelector('.navbar-collapse');

const displayShadow = () => shadow.classList.add('show');

const hideNavbarList = () => {
  navbarList.classList.remove('show');
  shadow.classList.remove('show');
};