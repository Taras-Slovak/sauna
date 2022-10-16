const getMainBtn = document.querySelector(".main__button");
const getCloseBtn = document.querySelector(".main__close");
const getMainSideBar = document.querySelector(".main__side-bar");
const mainContent = document.querySelector(".main__content");

getMainBtn.addEventListener("click", () => {
  if (!getMainSideBar.classList.contains("side-bar-opened")) {
    getMainSideBar.classList.add("side-bar-opened");
    getMainBtn.classList.add("button-hidden");
    document.body.style.overflow = "hidden";
  } else {
    getMainSideBar.classList.remove("side-bar-opened");
    getMainBtn.classList.remove("button-hidden");
    document.body.style.overflow = "";
  }
});

getCloseBtn.addEventListener("click", (e) => {
  getMainSideBar.classList.remove("side-bar-opened");
  getMainBtn.classList.remove("button-hidden");
  document.body.style.overflow = "";
  console.log(e.currentTarget);
});

mainContent.addEventListener("click", (e) => {
  document.body.style.overflow = "";
  getMainSideBar.classList.remove("side-bar-opened");
  getMainBtn.classList.remove("button-hidden");
  console.log(e.target);
});
