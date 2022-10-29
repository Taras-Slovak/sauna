const getMainBtn = document.querySelector(".side-bar__open ");
const getCloseBtn = document.querySelector(".side-bar__close");
const getMainSideBar = document.querySelector(".side-bar ");

getMainBtn.addEventListener("click", () => {
  if (!getMainSideBar.classList.contains("side-bar-opened")) {
    getMainSideBar.classList.add("side-bar-opened");
    getMainBtn.style.opacity = "0";
    document.body.style.overflow = "hidden";
  } else {
    getMainSideBar.classList.remove("side-bar-opened");
    getMainBtn.classList.remove("button-hidden");
    document.body.style.overflow = "";
  }
});

getCloseBtn.addEventListener("click", () => {
  getMainSideBar.classList.remove("side-bar-opened");
  getMainBtn.style.opacity = "1";
  document.body.style.overflow = "";
});

getMainSideBar.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("side-bar-opened") ||
    e.target.classList.contains("side-bar__inner")
  ) {
    document.body.style.overflow = "";
    getMainSideBar.classList.remove("side-bar-opened");
    getMainBtn.style.opacity = "1";
  }
});
