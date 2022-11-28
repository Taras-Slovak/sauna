/* eslint-disable no-unused-vars */
import AirDatepicker from 'air-datepicker';
import localeRu from 'air-datepicker/locale/ru';
import noUiSlider from 'nouislider';

function dataPicker() {
  let startDate = new Date();
  new AirDatepicker('#data-picker', {
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

function searchPanel() {
  let canEdit = false;

  function dropdown() {
    const searchItems = document.querySelectorAll('.search-panel__item');

    if (window.screen.width > 1150) {
      searchItems.forEach((searchItem) => {
        searchItem.addEventListener('click', () => {
          canEdit = !canEdit;
          searchItem.previousElementSibling.classList.toggle('visibility-back');
          searchItem.nextElementSibling.classList.toggle('show');
          searchItem.firstElementChild.classList.toggle('visibility-down');
        });
      });
    } else {
      searchItems.forEach((searchItem) => {
        searchItem.addEventListener('click', () => {
          canEdit = !canEdit;
          if (searchItem.classList.contains('only-one-opened')) {
            searchItem.classList.remove('only-one-opened');
            searchItems.forEach((item) => {
              item.classList.remove('only-one-opened');
              item.previousElementSibling.classList.remove('visibility-back');
              item.nextElementSibling.classList.remove('show');
              item.firstElementChild.classList.remove('visibility-down');
            });
          } else {
            searchItems.forEach((item) => {
              item.classList.remove('only-one-opened');
              item.classList.remove('only-one-opened');
              item.previousElementSibling.classList.remove('visibility-back');
              item.nextElementSibling.classList.remove('show');
              item.firstElementChild.classList.remove('visibility-down');
            });
            searchItem.classList.add('only-one-opened');
            searchItem.previousElementSibling.classList.add('visibility-back');
            searchItem.nextElementSibling.classList.add('show');
            searchItem.firstElementChild.classList.add('visibility-down');
          }
        });
      });
    }
  }
  dropdown();

  function closeOnClick() {
    const searchItems = document.querySelectorAll('.search-panel__item');
    const banner = document.querySelector('.banner');
    const advantage = document.querySelector('.advantage');
    banner.addEventListener('click', (e) => {
      if (
        e.target.classList.contains('banner') ||
        e.target.classList.contains('banner__title')
      ) {
        searchItems.forEach((item) => {
          item.previousElementSibling.classList.remove('visibility-back');
          item.nextElementSibling.classList.remove('show');
          item.firstElementChild.classList.remove('visibility-down');
        });
      }
    });

    advantage.addEventListener('click', (e) => {
      if (e.currentTarget.classList.contains('advantage')) {
        searchItems.forEach((item) => {
          item.previousElementSibling.classList.remove('visibility-back');
          item.nextElementSibling.classList.remove('show');
          item.firstElementChild.classList.remove('visibility-down');
        });
      }
    });
  }
  closeOnClick();

  function rangeItem() {
    let range = document.getElementById('range');
    noUiSlider.create(range, {
      start: [100, 1500],
      step: 10,
      range: {
        min: 0,
        max: 1500,
      },
      connect: true,
    });

    let price = document.querySelector('.search-panel__price-hourly');
    let text = document.querySelector('.search-panel__price-txt');

    let inputMin = document.getElementById('input-min');
    let inputMax = document.getElementById('input-max');

    range.noUiSlider.on('update', (values) => {
      inputMin.value = Math.round(values[0]);
      inputMax.value = Math.round(values[1]);
      if (canEdit) {
        text.innerText = 'Цена за час';
        price.innerText = `${inputMin.value} - ${inputMax.value}`;
      }
    });

    inputMin.addEventListener('change', () => {
      range.noUiSlider.set([inputMin.value, null]);
    });

    inputMax.addEventListener('change', () => {
      range.noUiSlider.set([null, inputMax.value]);
    });
  }

  rangeItem();
}

searchPanel();

function radioButtons(initName, filterName, buttons) {
  const filteredName = document.querySelector(filterName);
  const radioButtons = document.querySelectorAll(buttons);

  radioButtons.forEach((element) => {
    element.addEventListener('click', () => {
      let filtered = [];

      if (filtered.length === 0) {
        filteredName.innerText = initName;
      }

      radioButtons.forEach((elem) => {
        if (elem.checked) {
          filtered.push(elem.nextElementSibling.innerText);

          filteredName.innerText = `${filtered[0]} + 1`;
        }
      });
    });
  });
}

radioButtons(
  'Не важно',
  '.search-panel__sauna-filter',
  '.search-panel__dropdown-sauna input'
);

radioButtons(
  'Район города',
  '.search-panel__location-filter',
  '.search-panel__location input'
);
