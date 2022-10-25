/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
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

function shareShowHideBtn() {
  const getAllBtn = document.querySelectorAll(".share__button");
  getAllBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      getAllBtn.forEach((elem) => {
        elem.classList.remove("share-active");
        elem.textContent = "Применить";
        elem.previousElementSibling.style.opacity = "0";
      });

      if (btn.classList.contains("share-active")) {
        btn.classList.remove("share-active");
        btn.textContent = "Применить";
        btn.previousElementSibling.style.opacity = "0";
      } else {
        btn.classList.add("share-active");
        btn.textContent = "Отменить";
        btn.previousElementSibling.style.opacity = "1";
      }
    });
  });
}

shareShowHideBtn();
