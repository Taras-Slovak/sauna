function validationRegisterPhone() {
  const getInputCode = document.querySelector('#telReg');
  const getButtonCode = document.querySelector('#telRegBtn');
  const getAgreeTel = document.querySelector('#agreeTel');

  getInputCode.addEventListener('input', () => {
    if (getInputCode.value.length >= 5 && getAgreeTel.checked) {
      getButtonCode.disabled = false;
    } else {
      getButtonCode.disabled = true;
    }
  });

  getAgreeTel.addEventListener('click', () => {
    if (getInputCode.value.length >= 5 && getAgreeTel.checked) {
      getButtonCode.disabled = false;
    } else {
      getButtonCode.disabled = true;
    }
  });
}

validationRegisterPhone();

function validationCountdown() {
  const getRegBtn = document.querySelector('#sendPhone');
  const getCountdown = document.querySelector('#countdown');
  const getSmsBtn = document.querySelector('#no-sms');
  const getInputCode = document.querySelector('#telReg');
  const getNewCode = document.querySelector('#newCode');
  let intervalId;

  getRegBtn.addEventListener('click', () => {
    getInputCode.value = '';
    countdown();
  });

  getNewCode.addEventListener('click', () => {
    getInputCode.value = '';
    countdown();
  });

  function countdown() {
    let seconds = 5;
    clearInterval(intervalId);
    intervalId = null;
    if (!intervalId) {
      intervalId = setInterval(() => {
        if (seconds >= 0) {
          getCountdown.innerHTML = seconds;
          getSmsBtn.disabled = true;

          if (seconds < 10) {
            getCountdown.innerHTML = `0${seconds}`;
          }
          seconds -= 1;
        } else {
          getSmsBtn.disabled = false;
        }
      }, 1000);
    }
  }
}

validationCountdown();

function validationForm(regBtn, field, require, agree) {
  const getTelRegFormBtn = document.querySelector(regBtn);
  const getAllField = document.querySelectorAll(field);
  const getAllRequired = document.querySelectorAll(require);
  const getAgreeTelForm = document.querySelector(agree);

  getAllField.forEach((input) => {
    input.addEventListener('input', () => {
      let trueRequired = [];

      getAllRequired.forEach((element) => {
        if (element.checkValidity()) {
          trueRequired.push(element);
        }
      });

      if (
        trueRequired.length === getAllRequired.length &&
        getAgreeTelForm.checked
      ) {
        getTelRegFormBtn.disabled = false;
      } else {
        getTelRegFormBtn.disabled = true;
      }
      getAgreeTelForm.addEventListener('change', () => {
        if (
          trueRequired.length === getAllRequired.length &&
          getAgreeTelForm.checked
        ) {
          getTelRegFormBtn.disabled = false;
        } else {
          getTelRegFormBtn.disabled = true;
        }
      });
    });
  });
}
validationForm(
  '#telRegFormBtn',
  '.form__phone-field',
  '.form__phone-field[required]',
  '#agreeTelForm'
);

validationForm(
  '#mailRegFormBtn',
  '.form__mail-field',
  '.form__mail-field[required]',
  '#agreeMailForm'
);

function togglePassword() {
  const getPassword = document.querySelector('#mailPass');
  const getTogglePass = document.querySelector('.form__show-password');
  getTogglePass.addEventListener('click', () => {
    if (getPassword.type === 'password') {
      getPassword.type = 'text';
    } else {
      getPassword.type = 'password';
    }
  });
}
togglePassword();
