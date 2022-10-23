function tabulation() {
  const getServiceBtn = document.querySelector(".reviews__service-btn");
  const getFlampBtn = document.querySelector(".reviews__flamp-btn");
  const getService = document.querySelector(".reviews__service");
  const getFlamp = document.querySelector(".reviews__flamp");

  getServiceBtn.addEventListener("click", () => {
    getServiceBtn.classList.add("active-tab");
    getFlampBtn.classList.remove("active-tab");
    getService.style.height = "auto";
    getService.style.opacity = "1";
    getFlamp.style.height = "0";
    getFlamp.style.opacity = "0";
  });

  getFlampBtn.addEventListener("click", () => {
    getFlampBtn.classList.add("active-tab");
    getServiceBtn.classList.remove("active-tab");
    getService.style.height = "0";
    getService.style.opacity = "0";
    getFlamp.style.height = "auto";
    getFlamp.style.opacity = "1";
  });
}

tabulation();
