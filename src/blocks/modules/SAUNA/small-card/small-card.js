function showLessOrMore() {
  const getButtons = document.querySelectorAll(".small-card__btn-capacity");
  getButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.open === "false") {
        button.innerHTML = `
        <p>Скрыть</p> 
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.175 12.8417L10 9.02501L13.825 12.8417L15 11.6667L10 6.66667L5 11.6667L6.175 12.8417Z" />
        </svg>
      `;
        button.previousElementSibling.classList.add("height-auto");
        button.dataset.open = "true";
      } else {
        button.innerHTML = `
        <p> Узнать больше </p>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"   xmlns="http://www.w3.org/2000/svg">
          <path d="M13.825 6.66663L10 10.4833L6.175 6.66663L5 7.84163L10 12.8416L15 7.84163L13.825 6.66663Z"/>
        </svg>
        `;
        button.previousElementSibling.classList.remove("height-auto");
        button.dataset.open = "false";
      }
    });
  });
}

showLessOrMore();
