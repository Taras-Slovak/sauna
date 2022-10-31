/* eslint-disable no-useless-escape */
function addOrRemove() {
  const getMainField = document.querySelector(
    " .company-contacts__telephone-group",
  );
  const getAddButtons = document.querySelector(
    ".company-contacts__telephone-add",
  );

  function addNewElement() {
    let newTelephone = document.createElement("div");
    newTelephone.classList.add("company-contacts__telephone");
    newTelephone.innerHTML = `
    <div class="company-contacts__field">
      <label for="telephone">Телефон</label>
      <input id="telephone" name="telephone" type="text" placeholder="+38 067 123-23-23">
    </div>
    <button class="company-contacts__telephone-delete" type="button">
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="13" cy="13" r="12" fill="#2F2F2F"></circle>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.9505 8.88994C9.65761 8.59705 9.18274 8.59705 8.88984 8.88994C8.59695 9.18284 8.59695 9.65771 8.88984 9.9506L11.9392 13L8.88984 16.0494C8.59695 16.3423 8.59695 16.8172 8.88984 17.1101C9.18274 17.403 9.65761 17.403 9.9505 17.1101L12.9999 14.0607L16.0493 17.1101C16.3422 17.403 16.8171 17.403 17.11 17.1101C17.4029 16.8172 17.4029 16.3423 17.11 16.0494L14.0606 13L17.11 9.9506C17.4029 9.65771 17.4029 9.18284 17.11 8.88994C16.8171 8.59705 16.3422 8.59705 16.0493 8.88994L12.9999 11.9393L9.9505 8.88994Z"></path>
      </svg>
    </button>
    `;

    getMainField.appendChild(newTelephone);
  }

  getAddButtons.addEventListener("click", () => {
    addNewElement();

    [...getMainField.children].forEach((element) => {
      let btn = element.firstElementChild.nextElementSibling;

      btn.addEventListener("click", () => {
        if (btn.classList.contains("company-contacts__telephone-delete"))
          element.remove();
      });
    });
  });
}
addOrRemove();

function removeAddTime() {
  const getAddBtn = document.querySelector(".company-contacts__time-add");
  getAddBtn.addEventListener("click", () => {
    createNewDate();
    const getAllDelete = document.querySelectorAll(".company-contacts__date");
    getText();
    getAllDelete.forEach((item) => {
      let getDeleteBtn =
        item.firstElementChild.nextElementSibling.nextElementSibling;

      getDeleteBtn.addEventListener("click", () => {
        if (getDeleteBtn.classList.contains("company-contacts__time-delete"))
          item.remove();
        getText();
      });
    });
  });
}

function createNewDate() {
  const getDatePicker = document.querySelector(
    ".company-contacts__date-picker",
  );

  let newDate = document.createElement("div");

  newDate.classList.add("company-contacts__date");

  newDate.innerHTML = `

  <div class="company-contacts__days">
    <button
      class="company-contacts__day"
      type="button"
      onclick="this.classList.toggle('background-grey')"
    >
      Пн
    </button>
    <button
      class="company-contacts__day"
      type="button"
      onclick="this.classList.toggle('background-grey')"
    >
      Вт
    </button>
    <button
      class="company-contacts__day"
      type="button"
      onclick="this.classList.toggle('background-grey')"
    >
      Ср
    </button>
    <button
      class="company-contacts__day"
      type="button"
      onclick="this.classList.toggle('background-grey')"
    >
      Чт
    </button>
    <button
      class="company-contacts__day"
      type="button"
      onclick="this.classList.toggle('background-grey')"
    >
      Пт
    </button>
    <button
      class="company-contacts__day"
      type="button"
      onclick="this.classList.toggle('background-grey')"
    >
      Сб
    </button>
    <button
      class="company-contacts__day"
      type="button"
      onclick="this.classList.toggle('background-grey')"
    >
      Вс
    </button>
</div>
<div class="company-contacts__times">
  <div class="company-contacts__field">
    <button onclick="this.classList.toggle('dropdown-opened')"
      class="company-contacts__dropdown-button"
      id="dropdown-item"
      type="button"
    >
      <p class="company-contacts__dropdown-txt">00:00</p>
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
      <div class="company-contacts__dropdown-menu" id="menu-hour">
        <span class="company-contacts__dropdown-item" data-hour="00:00">
          00:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="01:00">
          01:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="02:00">
          02:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="03:00">
          03:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="04:00">
          04:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="05:00">
          05:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="06:00">
          06:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="07:00">
          07:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="08:00">
          08:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="09:00">
          09:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="10:00">
          10:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="11:00">
          11:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="12:00">
          12:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="13:00">
          13:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="14:00">
          14:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="15:00">
          15:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="16:00">
          16:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="17:00">
          17:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="18:00">
          18:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="19:00">
          19:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="20:00">
          20:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="21:00">
          21:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="22:00">
          22:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="23:00">
          23:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="24:00">
          24:00
        </span>
      </div>
    </button>
  </div>
  <span class="company-contacts__line"> </span>
  <div class="company-contacts__field">
    <button onclick="this.classList.toggle('dropdown-opened')"
      class="company-contacts__dropdown-button"
      id="dropdown-item"
      type="button"
    >
      <p class="company-contacts__dropdown-txt">00:00</p>
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
      <div class="company-contacts__dropdown-menu" id="menu-hour" >
        <span class="company-contacts__dropdown-item" data-hour="00:00">
          00:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="01:00">
          01:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="02:00">
          02:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="03:00">
          03:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="04:00">
          04:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="05:00">
          05:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="06:00">
          06:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="07:00">
          07:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="08:00">
          08:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="09:00">
          09:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="10:00">
          10:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="11:00">
          11:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="12:00">
          12:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="13:00">
          13:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="14:00">
          14:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="15:00">
          15:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="16:00">
          16:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="17:00">
          17:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="18:00">
          18:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="19:00">
          19:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="20:00">
          20:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="21:00">
          21:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="22:00">
          22:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="23:00">
          23:00
        </span>
        <span class="company-contacts__dropdown-item" data-hour="24:00">
          24:00
        </span>
      </div>
    </button>
  </div>
</div>
<button class="company-contacts__time-delete" type="button">
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
  const getAllText = document.querySelectorAll(
    ".company-contacts__dropdown-item",
  );

  getAllText.forEach((element) => {
    element.addEventListener("click", () => {
      element.parentElement.parentElement.firstElementChild.innerText =
        element.innerText;
      console.log(
        element.parentElement.parentElement.firstElementChild.innerText,
      );
    });
  });
}
getText();

function uploadingLogo() {
  const getInputFile = document.getElementById("contacts-img-upload");
  getInputFile.addEventListener("change", uploadYourLogo);

  function uploadYourLogo() {
    const path = getInputFile.value;
    const extension = path.split(".").pop();
    const getImg = document.getElementById("contacts-img-preview");
    if (
      extension == "jpg" ||
      extension == "svg" ||
      extension == "jpeg" ||
      extension == "png" ||
      extension == "webp"
    ) {
      getImg.classList.add("company-contacts__uploading-img");
      getImg.src = window.URL.createObjectURL(getInputFile.files[0]);
      // const filename = path
      //   .replace(/^.*[\\\/]/, "")
      //   .split(".")
      //   .slice(0, -1)
      //   .join(".");
      // document.getElementById("contacts-img-filename").innerHTML = filename;
      document.getElementById("contacts-img-filename").style.display = "none";
    } else {
      alert("File not supported");
    }
  }
}
uploadingLogo();
