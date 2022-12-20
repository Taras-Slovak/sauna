const getMainBtn = document.querySelector('.selection__button');
const getCloseBtn = document.querySelector('.selection__close');
const getMainSideBar = document.querySelector('.selection__side-bar');

getMainBtn.addEventListener('click', () => {
  if (!getMainSideBar.classList.contains('side-bar-opened')) {
    getMainSideBar.classList.add('side-bar-opened');
    getMainBtn.classList.add('button-hidden');
    document.body.style.overflow = 'hidden';
  } else {
    getMainSideBar.classList.remove('side-bar-opened');
    getMainBtn.classList.remove('button-hidden');
    document.body.style.overflow = '';
  }
});

getCloseBtn.addEventListener('click', () => {
  getMainSideBar.classList.remove('side-bar-opened');
  getMainBtn.classList.remove('button-hidden');
  document.body.style.overflow = '';
});

getMainSideBar.addEventListener('click', (e) => {
  if (e.target.classList.contains('side-bar-opened')) {
    document.body.style.overflow = '';
    getMainSideBar.classList.remove('side-bar-opened');
    getMainBtn.classList.remove('button-hidden');
  }
});
