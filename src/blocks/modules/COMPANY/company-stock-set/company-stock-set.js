/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import { Popover } from "bootstrap";
import Sortable from "sortablejs";

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

console.log("================================");
