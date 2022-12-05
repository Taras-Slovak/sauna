function getText() {
  const getAllText = document.querySelectorAll('.schedule-new__dropdown-item');

  getAllText.forEach((element) => {
    element.addEventListener('click', () => {
      element.parentElement.parentElement.firstElementChild.innerText =
        element.innerText;
    });
  });
}
getText();

function toggleContent() {
  const getAllDynamicContent = document.querySelectorAll('.dynamic-content');
  const getBookingRadio = document.querySelector('#booking');
  const getBookedRadio = document.querySelector('#booked');

  getBookingRadio.addEventListener('change', () => {
    if (getBookingRadio.checked) {
      getAllDynamicContent.forEach((content) => {
        content.style.display = 'flex';
      });
    }
  });

  getBookedRadio.addEventListener('change', () => {
    if (getBookedRadio.checked) {
      getAllDynamicContent.forEach((content) => {
        content.style.display = 'none';
      });
    }
  });
}

toggleContent();
