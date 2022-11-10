function switching() {
  const getButtons = document.querySelectorAll(".stock__item-btn");

  getButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("stock-enabled")) {
        btn.classList.remove("stock-enabled");
        btn.textContent = "Неактивная";
      } else {
        btn.classList.add("stock-enabled");
        btn.textContent = "Активная";
      }
    });
  });
}
switching();
