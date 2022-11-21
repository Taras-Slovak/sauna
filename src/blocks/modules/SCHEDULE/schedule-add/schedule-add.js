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
