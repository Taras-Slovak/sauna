function toggleSchedule() {
  const getLeftBtn = document.querySelector('.schedule__toggle-left');
  const getRightBtn = document.querySelector('.schedule__toggle-right');

  getLeftBtn.onclick = () => {
    if (!getLeftBtn.classList.contains('active-toggle')) {
      getLeftBtn.classList.add('active-toggle');
      getRightBtn.classList.remove('active-toggle');
    }
  };

  getRightBtn.onclick = () => {
    if (!getRightBtn.classList.contains('active-toggle')) {
      getRightBtn.classList.add('active-toggle');
      getLeftBtn.classList.remove('active-toggle');
    }
  };
}
toggleSchedule();
