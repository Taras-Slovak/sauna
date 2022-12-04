function toggleSchedule() {
  const getDayBtn = document.querySelector('.schedule-booking__toggle-day');
  const getWeekBtn = document.querySelector('.schedule-booking__toggle-week');
  const getMonthBtn = document.querySelector('.schedule-booking__toggle-month');

  getDayBtn.onclick = () => {
    if (!getDayBtn.classList.contains('active-toggle')) {
      getDayBtn.classList.add('active-toggle');
      getMonthBtn.classList.remove('active-toggle');
      getWeekBtn.classList.remove('active-toggle');
    }
  };

  getWeekBtn.onclick = () => {
    if (!getWeekBtn.classList.contains('active-toggle')) {
      getWeekBtn.classList.add('active-toggle');
      getMonthBtn.classList.remove('active-toggle');
      getDayBtn.classList.remove('active-toggle');
    }
  };

  getMonthBtn.onclick = () => {
    if (!getMonthBtn.classList.contains('active-toggle')) {
      getMonthBtn.classList.add('active-toggle');
      getWeekBtn.classList.remove('active-toggle');
      getDayBtn.classList.remove('active-toggle');
    }
  };
}
toggleSchedule();

function currentDaysOfMonth() {
  const getCurrentDay = document.querySelector('.schedule-booking__nav-text');
  const getAllDays = document.querySelectorAll('.schedule-booking__day');
  getAllDays.forEach((day) => {
    if (getCurrentDay.dataset.month === day.dataset.month) {
      day.style.opacity = '1';
    } else if (day.dataset.month == undefined || day.dataset.month == null) {
      day.style.opacity = '1';
    } else {
      day.style.opacity = '0.6';
    }
  });
}
currentDaysOfMonth();
