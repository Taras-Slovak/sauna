/* eslint-disable no-unused-vars */
import AirDatepicker from 'air-datepicker';
import localeRu from 'air-datepicker/locale/ru';

function dataPicker() {
  const monthText = document.querySelector('.schedule-week__nav-month');
  const yearText = document.querySelector('.schedule-week__nav-year');

  let startDate = new Date();

  yearText.textContent = startDate.getFullYear();
  monthText.textContent = localeRu.months[startDate.getMonth()];

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
    },
  });
}

dataPicker();

function toggleSchedule() {
  const getLeftBtn = document.querySelector('.schedule-week__toggle-left');
  const getRightBtn = document.querySelector('.schedule-week__toggle-right');

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
