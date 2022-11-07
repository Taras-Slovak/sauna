function switching() {
  const getButtons = document.querySelectorAll(".departments__item-btn");

  getButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("departments-enabled")) {
        btn.classList.remove("departments-enabled");
        btn.textContent = "Выключен";
      } else {
        btn.classList.add("departments-enabled");
        btn.textContent = "Включен";
      }
    });
  });
}
switching();
