function booking() {
  const getAllBooking = document.querySelectorAll(".booking");

  getAllBooking.forEach((elements) => {
    let getAllButtons =
      elements.firstElementChild.firstElementChild.nextElementSibling
        .firstElementChild.children;
    [...getAllButtons].forEach((button) => {
      button.addEventListener("click", (e) => {
        elements.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.style.display =
          "flex";
        e.currentTarget.firstElementChild.classList.toggle("booked");
      });
    });
  });
}

booking();

function pickerAmount() {
  const getAllPickers = document.querySelectorAll(".booking .booking__picker");

  getAllPickers.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      let number = e.currentTarget.firstElementChild.nextElementSibling;
      if (e.target.classList.contains("booking__picker-minus")) {
        if (number.textContent > 0) {
          number.textContent = --number.textContent;
        }
      }

      if (e.target.classList.contains("booking__picker-plus")) {
        if (number.textContent < 8) {
          number.textContent = ++number.textContent;
        }
      }
    });
  });
}

pickerAmount();
