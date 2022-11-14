/* eslint-disable no-unused-vars */
import noUiSlider from 'nouislider';
import { Popover } from 'bootstrap';

function initPopover() {
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) =>
      new Popover(popoverTriggerEl, {
        html: true
      })
  );
}
initPopover();

function changeOffers() {
  const getRadioButtons = document.querySelectorAll('.stock-set__radio-offer');
  const getDynamicText = document.querySelector('.stock-set__dynamic-text');

  function hideAllDynamicContent() {
    document.querySelectorAll('.stock-set__dynamic-content').forEach((element) => {
      element.style.display = 'none';
    });
  }

  function showContent(className) {
    document.querySelector(className).style.display = 'flex';
  }

  getRadioButtons.forEach((btn, i) => {
    btn.addEventListener('change', () => {
      getDynamicText.innerText = `Условие ${i + 1} (${btn.value})`;

      switch (btn.id) {
        case 'discount':
          hideAllDynamicContent();
          showContent('.stock-set__discount-content');
          break;

        case 'gift':
          hideAllDynamicContent();
          showContent('.stock-set__gift-content');
          break;

        case 'hourly-rate':
          hideAllDynamicContent();
          showContent('.stock-set__hourly-content');
          break;

        case 'package-rate':
          hideAllDynamicContent();
          showContent('.stock-set__package-content');
          break;
      }
    });
  });
}
changeOffers();

function getText() {
  const getAllText = document.querySelectorAll('.stock-set__dropdown-item');

  getAllText.forEach((element) => {
    element.addEventListener('click', () => {
      element.parentElement.parentElement.firstElementChild.innerText = element.innerText;
    });
  });
}
getText();

function createNewDate() {
  const getDateField = document.querySelector('.stock-set__date-content');
  const dateElement = document.createElement('div');
  dateElement.classList.add('stock-set__field');
  dateElement.innerHTML = `
  <button class="stock-set__dropdown-button" id="dropdown-item" type="button"
  onclick="this.classList.toggle('dropdown-opened')">
    <p class="stock-set__dropdown-txt">21.06.21-18.07.21 (пн, вт, сб,вс)</p>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.175 7.1582L10 10.9749L13.825 7.1582L15 8.3332L10 13.3332L5 8.3332L6.175 7.1582Z" fill="#2F2F2F">
    </path>
    </svg>
    <div class="stock-set__dropdown-menu" id="menu-branches"><span class="stock-set__dropdown-item"
      data-branches="some-branches">21.06.21-18.07.21 (пн, вт, сб,вс)-1</span><span class="stock-set__dropdown-item"
      data-branches="some-branches">21.06.21-18.07.21 (пн, вт, сб,вс)-2</span><span class="stock-set__dropdown-item"
      data-branches="some-branches">21.06.21-18.07.21 (пн, вт, сб,вс)-3</span><span class="stock-set__dropdown-item"
      data-branches="some-branches">21.06.21-18.07.21 (пн, вт, сб,вс)-4</span><span class="stock-set__dropdown-item"
      data-branches="some-branches">21.06.21-18.07.21 (пн, вт, сб,вс)-5</span><span class="stock-set__dropdown-item"
      data-branches="some-branches">21.06.21-18.07.21 (пн, вт, сб,вс)-6</span><span class="stock-set__dropdown-item"
      data-branches="some-branches">21.06.21-18.07.21 (пн, вт, сб,вс)-7</span><span class="stock-set__dropdown-item"
      data-branches="some-branches">21.06.21-18.07.21 (пн, вт, сб,вс)-8</span><span class="stock-set__dropdown-item"
      data-branches="some-branches">21.06.21-18.07.21 (пн, вт, сб,вс)-9</span><span class="stock-set__dropdown-item"
      data-branches="some-branches">21.06.21-18.07.21 (пн, вт, сб,вс)-10</span>
    </div>    
  </button>
  <svg class="stock-set__remove" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="this.parentElement.remove()">
    <circle cx="13" cy="13" r="11.3" stroke="black" stroke-width="1.4"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.9505 8.88994C9.65761 8.59705 9.18274 8.59705 8.88984 8.88994C8.59695 9.18284 8.59695 9.65771 8.88984 9.9506L11.9392 13L8.88984 16.0494C8.59695 16.3423 8.59695 16.8172 8.88984 17.1101C9.18274 17.403 9.65761 17.403 9.9505 17.1101L12.9999 14.0607L16.0493 17.1101C16.3422 17.403 16.8171 17.403 17.11 17.1101C17.4029 16.8172 17.4029 16.3423 17.11 16.0494L14.0606 13L17.11 9.9506C17.4029 9.65771 17.4029 9.18284 17.11 8.88994C16.8171 8.59705 16.3422 8.59705 16.0493 8.88994L12.9999 11.9393L9.9505 8.88994Z" fill="#2F2F2F"/>
  </svg>  
  `;

  getDateField.appendChild(dateElement);
}

function addNewElement(className, createFun, getTextFun) {
  const getAddBtn = document.querySelector(className);
  let number = 0;

  function someRandomId() {
    number++;
  }

  getAddBtn.addEventListener('click', () => {
    createFun(number);
    getTextFun();
    someRandomId();
  });
}

addNewElement('.stock-set__date-add', createNewDate, getText);

function rangeDuration(rangeItemId, inputMinId, inputMaxId, options) {
  let range = document.getElementById(rangeItemId);
  noUiSlider.create(range, {
    start: [10, 15],
    step: 1,
    range: {
      min: 8,
      max: 15
    },
    connect: true
  });

  let inputMin = document.getElementById(inputMinId);
  let inputMax = document.getElementById(inputMaxId);

  range.noUiSlider.on('update', (values) => {
    inputMin.value = `c ${Math.round(values[0])}:00`;
    inputMax.value = `по ${Math.round(values[1])}:00`;
  });

  inputMin.addEventListener('change', () => {
    range.noUiSlider.set([inputMin.value, null]);
  });

  inputMax.addEventListener('change', () => {
    range.noUiSlider.set([null, inputMax.value]);
  });
}

rangeDuration('range', 'input-min', 'input-max');

function createNewRange(id) {
  const getRangeField = document.querySelector('.stock-set__range-content');
  const rangeElement = document.createElement('div');
  rangeElement.classList.add('stock-set__range');
  rangeElement.innerHTML = `
    <div id="range-${id}" class="stock-set__range-line"></div>
    <div class="stock-set__field-group">
      <div class="stock-set__field">
        <input type="text" id="input-min-${id}">
      </div>
      <div class="stock-set__field">
        <input type="text" id="input-max-${id}">
      </div>
    </div>
    <svg class="stock-set__remove" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="this.parentElement.remove()">
    <circle cx="13" cy="13" r="11.3" stroke="black" stroke-width="1.4"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.9505 8.88994C9.65761 8.59705 9.18274 8.59705 8.88984 8.88994C8.59695 9.18284 8.59695 9.65771 8.88984 9.9506L11.9392 13L8.88984 16.0494C8.59695 16.3423 8.59695 16.8172 8.88984 17.1101C9.18274 17.403 9.65761 17.403 9.9505 17.1101L12.9999 14.0607L16.0493 17.1101C16.3422 17.403 16.8171 17.403 17.11 17.1101C17.4029 16.8172 17.4029 16.3423 17.11 16.0494L14.0606 13L17.11 9.9506C17.4029 9.65771 17.4029 9.18284 17.11 8.88994C16.8171 8.59705 16.3422 8.59705 16.0493 8.88994L12.9999 11.9393L9.9505 8.88994Z" fill="#2F2F2F"/>
  </svg>
  `;

  getRangeField.appendChild(rangeElement);
  rangeDuration(`range-${id}`, `input-min-${id}`, `input-max-${id}`);
}

addNewElement('.stock-set__range-add', createNewRange, getText);

function rangeHours(rangeItemId, inputMinId, inputMaxId) {
  let range = document.getElementById(rangeItemId);
  noUiSlider.create(range, {
    start: [3, 7],
    step: 1,
    range: {
      min: 1,
      max: 7
    },
    connect: true
  });

  let inputMin = document.getElementById(inputMinId);
  let inputMax = document.getElementById(inputMaxId);

  range.noUiSlider.on('update', (values) => {
    inputMin.value = `от ${Math.round(values[0])}`;
    inputMax.value = `до ${Math.round(values[1])}`;
  });

  inputMin.addEventListener('change', () => {
    range.noUiSlider.set([inputMin.value, null]);
  });

  inputMax.addEventListener('change', () => {
    range.noUiSlider.set([null, inputMax.value]);
  });
}

rangeHours('range-hours', 'input-min-hours', 'input-max-hours');

function rangePeople(rangeItemId, inputMinId, inputMaxId) {
  let range = document.getElementById(rangeItemId);
  noUiSlider.create(range, {
    start: [2, 5],
    step: 1,
    range: {
      min: 1,
      max: 5
    },
    connect: true
  });

  let inputMin = document.getElementById(inputMinId);
  let inputMax = document.getElementById(inputMaxId);

  range.noUiSlider.on('update', (values) => {
    inputMin.value = `от ${Math.round(values[0])}`;
    inputMax.value = `до ${Math.round(values[1])}`;
  });

  inputMin.addEventListener('change', () => {
    range.noUiSlider.set([inputMin.value, null]);
  });

  inputMax.addEventListener('change', () => {
    range.noUiSlider.set([null, inputMax.value]);
  });
}

rangePeople('range-people', 'input-min-people', 'input-max-people');
