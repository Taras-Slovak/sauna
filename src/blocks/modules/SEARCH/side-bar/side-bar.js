import localeRu from "air-datepicker/locale/ru";
import AirDatepicker from "air-datepicker";
import noUiSlider from "nouislider";

function dataPicker() {
  new AirDatepicker("#side-bar-picker", {
    locale: localeRu,
    multipleDates: true,
    range: true,
    multipleDatesSeparator: " - ",
    autoClose: true,
    position: "bottom center",
  });
}
dataPicker();

function rangeItem(rangeClass, inputMinItem, inputMaxItem) {
  let range = document.querySelector(rangeClass);

  if (range.classList.contains("range-price")) {
    noUiSlider.create(range, {
      start: [100, 1500],
      step: 10,
      range: {
        min: 0,
        max: 1500,
      },
      connect: true,
    });
  } else {
    noUiSlider.create(range, {
      start: [0, 1440],
      step: 1,
      range: {
        min: 0,
        max: 1440,
      },
      connect: true,
    });
  }

  let inputMin = document.getElementById(inputMinItem);
  let inputMax = document.getElementById(inputMaxItem);

  if (range.classList.contains("range-price")) {
    range.noUiSlider.on("update", (values) => {
      inputMin.value = Math.round(values[0]);
      inputMax.value = Math.round(values[1]);
    });

    inputMin.addEventListener("change", () => {
      range.noUiSlider.set([inputMin.value, null]);
    });

    inputMax.addEventListener("change", () => {
      range.noUiSlider.set([null, inputMax.value]);
    });
  } else {
    let convertValuesToTime = function(values, handle) {
      let hours = 0,
        minutes = 0;

      if (handle === 0) {
        hours = convertToHour(values[0]);
        minutes = convertToMinute(values[0], hours);
        inputMin.value = formatHoursAndMinutes(hours, minutes);
        return;
      }

      hours = convertToHour(values[1]);
      minutes = convertToMinute(values[1], hours);
      inputMax.value = formatHoursAndMinutes(hours, minutes);
    };

    let convertToHour = function(value) {
      return Math.floor(value / 60);
    };
    let convertToMinute = function(value, hour) {
      return value - hour * 60;
    };
    let formatHoursAndMinutes = function(hours, minutes) {
      if (hours.toString().length == 1) hours = "0" + hours;
      if (minutes.toString().length == 1) minutes = "0" + minutes;
      return hours + ":" + minutes;
    };

    range.noUiSlider.on("update", function(values, handle) {
      convertValuesToTime(values, handle);
    });

    // range.noUiSlider.on("update", (values) => {
    //   inputMin.value = Math.round(values[0]);
    //   inputMax.value = Math.round(values[1]);
    // });

    // inputMin.addEventListener("change", () => {
    //   range.noUiSlider.set([inputMin.value, null]);
    // });

    // inputMax.addEventListener("change", () => {
    //   range.noUiSlider.set([null, inputMax.value]);
    // });
  }
}

rangeItem(".range-price", "price-min", "price-max");

rangeItem(".range-time", "time-min", "time-max");
