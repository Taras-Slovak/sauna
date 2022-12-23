import localeRu from 'air-datepicker/locale/ru';
import AirDatepicker from 'air-datepicker';
import noUiSlider from 'nouislider';

function dataPicker() {
  let startDate = new Date();
  new AirDatepicker('#side-bar-picker', {
    locale: localeRu,
    multipleDates: true,
    range: true,
    multipleDatesSeparator: ' - ',
    selectedDates: [startDate],
    autoClose: true,
    position: 'bottom center',
  });
}

dataPicker();

function rangeItem(rangeClass, inputMinItem, inputMaxItem) {
  let range = document.querySelector(rangeClass);

  if (range.classList.contains('range-price')) {
    noUiSlider.create(range, {
      start: [100, 1500],
      step: 10,
      range: {
        min: 0,
        max: 1500,
      },
      connect: true,
    });
  } else {
    noUiSlider.create(range, {
      start: [0, 1440],
      step: 1,
      range: {
        min: 0,
        max: 1440,
      },
      connect: true,
    });
  }

  let inputMin = document.getElementById(inputMinItem);
  let inputMax = document.getElementById(inputMaxItem);

  if (range.classList.contains('range-price')) {
    range.noUiSlider.on('update', (values) => {
      inputMin.value = Math.round(values[0]);
      inputMax.value = Math.round(values[1]);
    });

    inputMin.addEventListener('change', () => {
      range.noUiSlider.set([inputMin.value, null]);
    });

    inputMax.addEventListener('change', () => {
      range.noUiSlider.set([null, inputMax.value]);
    });
  } else {
    let convertValuesToTime = function(values, handle) {
      let hours = 0,
        minutes = 0;

      if (handle === 0) {
        hours = convertToHour(values[0]);
        minutes = convertToMinute(values[0], hours);
        inputMin.value = formatHoursAndMinutes(hours, minutes);
        return;
      }

      hours = convertToHour(values[1]);
      minutes = convertToMinute(values[1], hours);
      inputMax.value = formatHoursAndMinutes(hours, minutes);
    };

    let convertToHour = function(value) {
      return Math.floor(value / 60);
    };
    let convertToMinute = function(value, hour) {
      return value - hour * 60;
    };
    let formatHoursAndMinutes = function(hours, minutes) {
      if (hours.toString().length == 1) hours = '0' + hours;
      if (minutes.toString().length == 1) minutes = '0' + minutes;
      return hours + ':' + minutes;
    };

    range.noUiSlider.on('update', function(values, handle) {
      convertValuesToTime(values, handle);
    });
  }
}

rangeItem('.range-price', 'price-min', 'price-max');

rangeItem('.range-time', 'time-min', 'time-max');

function showLessOrMore() {
  const getButtons = document.querySelectorAll('.side-bar__btn-capacity');
  getButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.dataset.open === 'false') {
        button.innerHTML = `
        <p>Показать меньше</p> 
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.175 12.8417L10 9.02501L13.825 12.8417L15 11.6667L10 6.66667L5 11.6667L6.175 12.8417Z" />
        </svg>
      `;
        button.previousElementSibling.classList.add('height-auto');
        button.dataset.open = 'true';
      } else {
        button.innerHTML = `
        <p> Показать больше </p>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"   xmlns="http://www.w3.org/2000/svg">
          <path d="M13.825 6.66663L10 10.4833L6.175 6.66663L5 7.84163L10 12.8416L15 7.84163L13.825 6.66663Z"/>
        </svg>
        `;
        button.previousElementSibling.classList.remove('height-auto');
        button.dataset.open = 'false';
      }
    });
  });
}

showLessOrMore();
