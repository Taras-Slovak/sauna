/* eslint-disable no-unused-vars */
import { Popover } from 'bootstrap';
function initPopover() {
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) =>
      new Popover(popoverTriggerEl, {
        html: true,
      })
  );
}
initPopover();

function getText() {
  const getAllText = document.querySelectorAll('.schedule-add__dropdown-item');

  getAllText.forEach((element) => {
    element.addEventListener('click', () => {
      element.parentElement.parentElement.firstElementChild.innerText =
        element.innerText;
    });
  });
}
getText();

function cloneElement() {
  const getAddBtn = document.querySelectorAll('.schedule-add__time-add');
  const cloneDeepElement = document.querySelector('.schedule-add__date');

  getAddBtn.forEach((element) => {
    element.addEventListener('click', () => {
      const getElementGroup = element.parentElement.parentElement;
      const clonedElement = cloneDeepElement.cloneNode(true);
      const newElement = document.createElement('div');
      newElement.classList.add(
        'schedule-add__flat-field',
        'schedule-add__date-item'
      );

      const removeButton = document.createElement('button');
      removeButton.classList.add('schedule-add__remove-btn');
      removeButton.innerHTML = `
      <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"
      onclick = "this.parentElement.parentElement.remove()"
      >
        <circle cx="16.9999" cy="17" r="12" transform="rotate(-45 16.9999 17)" fill="#2F2F2F"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9505 12.8899C13.6576 12.597 13.1827 12.597 12.8898 12.8899C12.5969 13.1828 12.597 13.6577 12.8898 13.9506L15.9392 17L12.8898 20.0494C12.597 20.3423 12.5969 20.8172 12.8898 21.1101C13.1827 21.403 13.6576 21.403 13.9505 21.1101L16.9999 18.0607L20.0493 21.1101C20.3422 21.403 20.8171 21.403 21.11 21.1101C21.4029 20.8172 21.4029 20.3423 21.11 20.0494L18.0606 17L21.11 13.9506C21.4029 13.6577 21.4029 13.1828 21.11 12.8899C20.8171 12.597 20.3422 12.597 20.0493 12.8899L16.9999 15.9393L13.9505 12.8899Z" fill="white"/>
      </svg>
      `;
      newElement.append(clonedElement);
      newElement.append(removeButton);

      getElementGroup.append(newElement);
      getText();
    });
  });
}
cloneElement();

function toggleCalculation() {
  const getAllRadio = document.querySelectorAll(
    '.schedule-add__radio-calculation'
  );

  getAllRadio.forEach((radio) => {
    radio.addEventListener('change', () => {
      const inputPlace =
        radio.parentElement.parentElement.parentElement.nextElementSibling
          .firstElementChild.firstElementChild.nextElementSibling;

      const inputAddPlace =
        radio.parentElement.parentElement.parentElement.nextElementSibling
          .firstElementChild.nextElementSibling.firstElementChild
          .nextElementSibling;

      const inputPrice =
        radio.parentElement.parentElement.parentElement.nextElementSibling
          .nextElementSibling.firstElementChild.firstElementChild
          .nextElementSibling;
      const inputAddPrice =
        radio.parentElement.parentElement.parentElement.nextElementSibling
          .nextElementSibling.firstElementChild.nextElementSibling
          .firstElementChild.nextElementSibling;

      if (
        radio.checked &&
        radio.classList.contains('schedule-add__radio-place')
      ) {
        inputPlace.classList.add('input-active');
        inputAddPlace.classList.add('input-active');
        inputPrice.classList.remove('input-active');
        inputAddPrice.classList.remove('input-active');
      }

      if (
        radio.checked &&
        radio.classList.contains('schedule-add__radio-price')
      ) {
        inputPrice.classList.add('input-active');
        inputAddPrice.classList.add('input-active');
        inputPlace.classList.remove('input-active');
        inputAddPlace.classList.remove('input-active');
      }
    });
  });
}

toggleCalculation();
