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
