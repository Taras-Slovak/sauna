function toggleText() {
  const getAllCardBtn = document.querySelectorAll('.account-from__card-btn');
  getAllCardBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.textContent === 'Изменить') {
        btn.textContent = 'Отменить';
      } else {
        btn.textContent = 'Изменить';
      }
    });
  });
}

toggleText();
