/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import { Popover } from "bootstrap";

function initPopover() {
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]',
  );
  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) =>
      new Popover(popoverTriggerEl, {
        html: true,
      }),
  );
}
initPopover();

function togglingContent() {
  const getAllToggle = document.querySelectorAll(".switch input");

  getAllToggle.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const getTextArea =
        toggle.parentElement.parentElement.nextElementSibling.lastElementChild;

      if (!toggle.checked) {
        console.log(getTextArea);
        getTextArea.classList.add("textarea-disabled");
        getTextArea.disabled = true;
        getTextArea.placeholder = "";
        getTextArea.value = "";
      } else {
        getTextArea.classList.remove("textarea-disabled");
        getTextArea.disabled = false;
        getTextArea.placeholder = "Введите описание";
      }
    });
  });
}
togglingContent();
