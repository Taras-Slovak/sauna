function showHideNavbar() {
  const getNavBarSauna = document.querySelector("#saunaNavBar");
  const getMenuSauna = document.querySelector(".menu-sauna");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      getNavBarSauna.style.display = "none";
      getMenuSauna.style.display = "flex";
    } else {
      getNavBarSauna.style.display = "flex";
      getMenuSauna.style.display = "none";
    }
  });
}

showHideNavbar();
