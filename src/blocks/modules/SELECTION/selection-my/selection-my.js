import localeRu from 'air-datepicker/locale/ru';
import AirDatepicker from 'air-datepicker';

function dataPicker() {
  let startDate = new Date();
  new AirDatepicker('#my-picker', {
    locale: localeRu,
    multipleDates: true,
    range: true,
    multipleDatesSeparator: ' - ',
    selectedDates: [startDate],
    autoClose: true,
    position: 'bottom center',
  });
}

dataPicker();
