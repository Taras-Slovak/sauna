function toggleSchedule() {
  const getLeftBtn = document.querySelector('.schedule-month__toggle-left');
  const getRightBtn = document.querySelector('.schedule-month__toggle-right');

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

function currentDaysOfMonth() {
  const getCurrentDay = document.querySelector('.schedule-month__nav-text');
  const getAllDays = document.querySelectorAll('.schedule-month__day');
  getAllDays.forEach((day) => {
    if (getCurrentDay.dataset.month === day.dataset.month) {
      day.style.opacity = '1';
    } else if (day.dataset.month == undefined || day.dataset.month == null) {
      day.style.opacity = '1';
    } else {
      day.style.opacity = '0.5';
    }
  });
}
currentDaysOfMonth();
