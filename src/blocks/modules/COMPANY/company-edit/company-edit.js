/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import { Popover } from 'bootstrap';
import Sortable from 'sortablejs';

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

function addOrRemove() {
  const getMainField = document.querySelector('.company-edit__telephone-group');
  const getAddButtons = document.querySelector('.company-edit__telephone-add');

  function addNewElement() {
    let newTelephone = document.createElement('div');
    newTelephone.classList.add('company-edit__telephone');
    newTelephone.innerHTML = `
    <div class="company-edit__field">
      <label for="telephone">Телефон</label>
      <input id="telephone" name="telephone" type="text" placeholder="+38 067 123-23-23">
    </div>
    <button class="company-edit__telephone-delete" type="button">
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="13" cy="13" r="12" fill="#2F2F2F"></circle>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.9505 8.88994C9.65761 8.59705 9.18274 8.59705 8.88984 8.88994C8.59695 9.18284 8.59695 9.65771 8.88984 9.9506L11.9392 13L8.88984 16.0494C8.59695 16.3423 8.59695 16.8172 8.88984 17.1101C9.18274 17.403 9.65761 17.403 9.9505 17.1101L12.9999 14.0607L16.0493 17.1101C16.3422 17.403 16.8171 17.403 17.11 17.1101C17.4029 16.8172 17.4029 16.3423 17.11 16.0494L14.0606 13L17.11 9.9506C17.4029 9.65771 17.4029 9.18284 17.11 8.88994C16.8171 8.59705 16.3422 8.59705 16.0493 8.88994L12.9999 11.9393L9.9505 8.88994Z"></path>
      </svg>
    </button>
    `;

    getMainField.appendChild(newTelephone);
  }

  getAddButtons.addEventListener('click', () => {
    addNewElement();

    [...getMainField.children].forEach((element) => {
      let btn = element.firstElementChild.nextElementSibling;

      btn.addEventListener('click', () => {
        if (btn.classList.contains('company-edit__telephone-delete'))
          element.remove();
      });
    });
  });
}
addOrRemove();

function removeAddTime() {
  const getAddBtn = document.querySelector('.company-edit__time-add');
  getAddBtn.addEventListener('click', () => {
    createNewDate();
    const getAllDelete = document.querySelectorAll('.company-edit__date');
    getText();
    getAllDelete.forEach((item) => {
      let getDeleteBtn =
        item.firstElementChild.nextElementSibling.nextElementSibling;

      getDeleteBtn.addEventListener('click', () => {
        if (getDeleteBtn.classList.contains('company-edit__time-delete'))
          item.remove();
        getText();
      });
    });
  });
}

function createNewDate() {
  const getDatePicker = document.querySelector('.company-edit__date-picker');

  let newDate = document.createElement('div');

  newDate.classList.add('company-edit__date');

  newDate.innerHTML = `

  <div class="company-edit__days">
    <button
      class="company-edit__day"
      type="button"
      onclick="this.classList.toggle('background-grey')"
    >
      Пн
    </button>
    <button
      class="company-edit__day"
      type="button"
      onclick="this.classList.toggle('background-grey')"
    >
      Вт
    </button>
    <button
      class="company-edit__day"
      type="button"
      onclick="this.classList.toggle('background-grey')"
    >
      Ср
    </button>
    <button
      class="company-edit__day"
      type="button"
      onclick="this.classList.toggle('background-grey')"
    >
      Чт
    </button>
    <button
      class="company-edit__day"
      type="button"
      onclick="this.classList.toggle('background-grey')"
    >
      Пт
    </button>
    <button
      class="company-edit__day"
      type="button"
      onclick="this.classList.toggle('background-grey')"
    >
      Сб
    </button>
    <button
      class="company-edit__day"
      type="button"
      onclick="this.classList.toggle('background-grey')"
    >
      Вс
    </button>
</div>
<div class="company-edit__times">
  <div class="company-edit__field">
    <button onclick="this.classList.toggle('dropdown-opened')"
      class="company-edit__dropdown-button"
      id="dropdown-item"
      type="button"
    >
      <p class="company-edit__dropdown-txt">00:00</p>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.175 7.1582L10 10.9749L13.825 7.1582L15 8.3332L10 13.3332L5 8.3332L6.175 7.1582Z"
          fill="#2F2F2F"
        />
      </svg>
      <div class="company-edit__dropdown-menu" id="menu-hour">
        <span class="company-edit__dropdown-item" data-hour="00:00">
          00:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="01:00">
          01:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="02:00">
          02:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="03:00">
          03:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="04:00">
          04:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="05:00">
          05:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="06:00">
          06:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="07:00">
          07:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="08:00">
          08:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="09:00">
          09:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="10:00">
          10:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="11:00">
          11:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="12:00">
          12:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="13:00">
          13:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="14:00">
          14:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="15:00">
          15:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="16:00">
          16:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="17:00">
          17:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="18:00">
          18:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="19:00">
          19:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="20:00">
          20:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="21:00">
          21:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="22:00">
          22:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="23:00">
          23:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="24:00">
          24:00
        </span>
      </div>
    </button>
  </div>
  <span class="company-edit__line"> </span>
  <div class="company-edit__field">
    <button onclick="this.classList.toggle('dropdown-opened')"
      class="company-edit__dropdown-button"
      id="dropdown-item"
      type="button"
    >
      <p class="company-edit__dropdown-txt">00:00</p>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.175 7.1582L10 10.9749L13.825 7.1582L15 8.3332L10 13.3332L5 8.3332L6.175 7.1582Z"
          fill="#2F2F2F"
        />
      </svg>
      <div class="company-edit__dropdown-menu" id="menu-hour" >
        <span class="company-edit__dropdown-item" data-hour="00:00">
          00:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="01:00">
          01:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="02:00">
          02:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="03:00">
          03:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="04:00">
          04:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="05:00">
          05:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="06:00">
          06:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="07:00">
          07:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="08:00">
          08:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="09:00">
          09:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="10:00">
          10:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="11:00">
          11:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="12:00">
          12:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="13:00">
          13:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="14:00">
          14:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="15:00">
          15:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="16:00">
          16:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="17:00">
          17:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="18:00">
          18:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="19:00">
          19:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="20:00">
          20:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="21:00">
          21:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="22:00">
          22:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="23:00">
          23:00
        </span>
        <span class="company-edit__dropdown-item" data-hour="24:00">
          24:00
        </span>
      </div>
    </button>
  </div>
</div>
<button class="company-edit__time-delete" type="button">
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="13" cy="13" r="12" fill="#2F2F2F"></circle>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.9505 8.88994C9.65761 8.59705 9.18274 8.59705 8.88984 8.88994C8.59695 9.18284 8.59695 9.65771 8.88984 9.9506L11.9392 13L8.88984 16.0494C8.59695 16.3423 8.59695 16.8172 8.88984 17.1101C9.18274 17.403 9.65761 17.403 9.9505 17.1101L12.9999 14.0607L16.0493 17.1101C16.3422 17.403 16.8171 17.403 17.11 17.1101C17.4029 16.8172 17.4029 16.3423 17.11 16.0494L14.0606 13L17.11 9.9506C17.4029 9.65771 17.4029 9.18284 17.11 8.88994C16.8171 8.59705 16.3422 8.59705 16.0493 8.88994L12.9999 11.9393L9.9505 8.88994Z"
    ></path>
  </svg>
</button>
  
  `;

  getDatePicker.appendChild(newDate);
}

removeAddTime();

function getText() {
  const getAllText = document.querySelectorAll('.company-edit__dropdown-item');

  getAllText.forEach((element) => {
    element.addEventListener('click', () => {
      element.parentElement.parentElement.firstElementChild.innerText =
        element.innerText;
      console.log(
        element.parentElement.parentElement.firstElementChild.innerText
      );
    });
  });
}
getText();

function uploadingPhotos() {
  let files = [],
    input = document.querySelector('#photos-upload'),
    container = document.querySelector('.company-edit__gallery');

  input.addEventListener('change', () => {
    let file = input.files;

    if (file.length == 0) return;

    for (let i = 0; i < file.length; i++) {
      if (file[i].type.split('/')[0] != 'image') continue;
      if (!files.some((e) => e.name == file[i].name)) files.push(file[i]);
    }

    showImages();
    sortPhotos();
  });

  function showImages() {
    if (files.length > 0) {
      container.classList.add('show-gallery');
      container.parentElement.classList.add('show-gallery');
    } else {
      container.classList.remove('show-gallery');
      container.parentElement.classList.remove('show-gallery');
    }

    container.innerHTML = files.reduce((prev, curr) => {
      return `${prev}
      <div class="company-edit__image"  >

        <svg class="company-edit__delete" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="13" cy="13" r="13" fill="white"/>
        <path d="M14.2273 7.59026C14.2273 7.20449 14.074 6.83452 13.8012 6.56174C13.5285 6.28896 13.1585 6.13571 12.7727 6.13571C12.387 6.13571 12.017 6.28896 11.7442 6.56174C11.4714 6.83452 11.3182 7.20449 11.3182 7.59026H10.3485C10.3485 6.94731 10.6039 6.33069 11.0585 5.87606C11.5132 5.42143 12.1298 5.16602 12.7727 5.16602C13.4157 5.16602 14.0323 5.42143 14.4869 5.87606C14.9416 6.33069 15.197 6.94731 15.197 7.59026H19.5606C19.6892 7.59026 19.8125 7.64134 19.9034 7.73227C19.9944 7.82319 20.0455 7.94652 20.0455 8.07511C20.0455 8.2037 19.9944 8.32702 19.9034 8.41795C19.8125 8.50887 19.6892 8.55995 19.5606 8.55995H19.0234L17.7667 19.4496C17.712 19.9223 17.4854 20.3583 17.1301 20.6748C16.7749 20.9912 16.3157 21.1661 15.8399 21.166H9.70558C9.22979 21.1661 8.77058 20.9912 8.41531 20.6748C8.06004 20.3583 7.8335 19.9223 7.77879 19.4496L6.52109 8.55995H5.98485C5.87137 8.55999 5.76147 8.52022 5.67429 8.44758C5.58712 8.37493 5.52818 8.274 5.50776 8.16238L5.5 8.07511C5.5 7.94652 5.55108 7.82319 5.64201 7.73227C5.73294 7.64134 5.85626 7.59026 5.98485 7.59026H14.2273ZM18.0459 8.55995H7.49855L8.7417 19.3381C8.76906 19.5745 8.8824 19.7926 9.06014 19.9509C9.23788 20.1091 9.4676 20.1965 9.70558 20.1963H15.8399C16.0777 20.1962 16.3072 20.1088 16.4847 19.9505C16.6622 19.7923 16.7754 19.5744 16.8028 19.3381L18.0459 8.55995ZM11.3182 10.9842C11.5558 10.9842 11.7545 11.1345 11.7953 11.3323L11.803 11.4089V17.3483C11.803 17.582 11.5858 17.7721 11.3182 17.7721C11.0806 17.7721 10.8818 17.6218 10.8411 17.424L10.8333 17.3473V11.4099C10.8333 11.1752 11.0505 10.9852 11.3182 10.9852V10.9842ZM14.2273 10.9842C14.4648 10.9842 14.6636 11.1345 14.7044 11.3323L14.7121 11.4089V17.3483C14.7121 17.582 14.4949 17.7721 14.2273 17.7721C13.9897 17.7721 13.7909 17.6218 13.7502 17.424L13.7424 17.3473V11.4099C13.7424 11.1752 13.9596 10.9852 14.2273 10.9852V10.9842Z"/>
        </svg>        
        <img src="${URL.createObjectURL(curr)}" />
      </div>`;
    }, '');

    document.querySelectorAll('.company-edit__delete').forEach((element, i) => {
      element.addEventListener('click', () => {
        delImage(i);
      });
    });
  }

  function delImage(index) {
    files.splice(index, 1);
    showImages();
  }
}
uploadingPhotos();

function sortPhotos() {
  const el = document.querySelector('.company-edit__gallery');
  const sortable = Sortable.create(el);
}

sortPhotos();
