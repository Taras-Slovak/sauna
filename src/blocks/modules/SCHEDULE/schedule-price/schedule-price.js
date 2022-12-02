function getText() {
  const getAllText = document.querySelectorAll(
    '.schedule-price__dropdown-item'
  );

  getAllText.forEach((element) => {
    element.addEventListener('click', () => {
      element.parentElement.parentElement.firstElementChild.innerText =
        element.innerText;
    });
  });
}
getText();
