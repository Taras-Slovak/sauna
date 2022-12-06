/* eslint-disable no-unused-vars */
import AirDatepicker from 'air-datepicker';
import localeRu from 'air-datepicker/locale/ru';

function dataPicker() {
  const monthText = document.querySelector('.schedule-booking-week__nav-month');
  const yearText = document.querySelector('.schedule-booking-week__nav-year');

  const getCurrentMonth = document.querySelector(
    '.schedule-booking-week__nav-text'
  );

  let startDate = new Date();

  yearText.textContent = startDate.getFullYear();
  monthText.textContent = localeRu.months[startDate.getMonth()];
  getCurrentMonth.dataset.month = startDate.getMonth() + 1;

  const datepicker = new AirDatepicker('#data-picker', {
    locale: localeRu,
    dateFormat: 'MM.d',
    multipleDates: true,
    range: true,
    multipleDatesSeparator: ' - ',
    selectedDates: [startDate, startDate],
    autoClose: true,
    position: 'bottom center',

    onSelect: function({ date }) {
      monthText.textContent = localeRu.months[date[0].getMonth()];
      yearText.textContent = date[0].getFullYear();
      getCurrentMonth.dataset.month = date[0].getMonth();
      currentDaysOfMonth();
    },
  });
}

dataPicker();

function toggleSchedule() {
  const getDayBtn = document.querySelector(
    '.schedule-booking-week__toggle-day'
  );
  const getWeekBtn = document.querySelector(
    '.schedule-booking-week__toggle-week'
  );
  const getMonthBtn = document.querySelector(
    '.schedule-booking-week__toggle-month'
  );

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
  const getCurrentDay = document.querySelector(
    '.schedule-booking-week__nav-text'
  );
  const getAllDays = document.querySelectorAll('.schedule-booking-week__day');
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
