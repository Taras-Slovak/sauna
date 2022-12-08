function disableButton() {
  const getInputCode = document.querySelector('#telReg');
  const getButtonCode = document.querySelector('#telRegBtn');
  const getAgreement = document.querySelector('#agreement');

  getInputCode.addEventListener('input', () => {
    if (getInputCode.value.length < 5 && getAgreement.checked === true) {
      getButtonCode.disabled = true;
    } else {
      getButtonCode.disabled = false;
    }
  });
}

disableButton();
