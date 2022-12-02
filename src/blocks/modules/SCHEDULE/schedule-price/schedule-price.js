function getText() {
  const getAllText = document.querySelectorAll(
    '.schedule-price__dropdown-item'
  );

  getAllText.forEach((element) => {
    element.addEventListener('click', () => {
      element.parentElement.parentElement.firstElementChild.innerText =
        element.innerText;
    });
  });
}
getText();

function currentDaysOfMonth() {
  const getCurrentDay = document.querySelector('.schedule-price__nav-text');
  const getAllDays = document.querySelectorAll('.schedule-price__day');
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
