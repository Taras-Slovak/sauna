/* eslint-disable no-unused-vars */
import datepicker from "js-datepicker";

const picker = datepicker("#data-picker", {
  customDays: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
  customMonths: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ],
});
