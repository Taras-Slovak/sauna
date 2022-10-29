function companyDropdown(dropdown, menu, items) {
  const getBtn = document.querySelector(dropdown),
    getMenu = document.querySelector(menu),
    getMenuItems = document.querySelectorAll(items);

  getBtn.addEventListener("click", () => {
    if (!getMenu.classList.contains("dropdown-opened")) {
      getMenu.classList.add("dropdown-opened");
      getBtn.classList.add("dropdown-opened");
      getMenuItems.forEach((item) => {
        item.addEventListener("click", () => {
          getBtn.firstElementChild.textContent = item.textContent;
        });
      });
    } else {
      getMenu.classList.remove("dropdown-opened");
      getBtn.classList.remove("dropdown-opened");
    }
  });
}
companyDropdown(
  "#dropdown-city",
  "#menu-city",
  ".company-contacts__dropdown-city",
);

companyDropdown(
  "#dropdown-street",
  "#menu-street",
  ".company-contacts__dropdown-street",
);
