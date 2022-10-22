function showLessOrMore() {
  const getButtons = document.querySelectorAll(".sauna-card__btn-capacity");
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

function accordion() {
  const getAllBtn = document.querySelectorAll(".sauna-card__offers-top");

  getAllBtn.forEach((element) => {
    element.addEventListener("click", () => {
      if (element.dataset.open === "false") {
        element.nextElementSibling.classList.add("sauna-card__open");

        element.firstElementChild.nextElementSibling.innerHTML = `
          <svg class="sauna-card__offers-icon" width="32" height="32" viewBox="0 0 32 32" fill="none"   xmlns="http://www.w3.org/2000/svg">
            <circle class="sauna-card__offers-circle" cx="15" cy="15" r="15" />
            <path d="M21.75 15H8.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        `;

        element.dataset.open = "true";
      } else {
        element.nextElementSibling.classList.remove("sauna-card__open");
        element.firstElementChild.nextElementSibling.innerHTML = `
          <svg class="sauna-card__offers-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle class="sauna-card__offers-circle" cx="15" cy="15" r="15"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 8.25C15.75 7.83579 15.4142 7.5 15 7.5C14.5858 7.5 14.25 7.83579 14.25 8.25V14.25H8.25C7.83579 14.25 7.5 14.5858 7.5 15C7.5 15.4142 7.83579 15.75 8.25 15.75H14.25V21.75C14.25 22.1642 14.5858 22.5 15 22.5C15.4142 22.5 15.75 22.1642 15.75 21.75V15.75H21.75C22.1642 15.75 22.5 15.4142 22.5 15C22.5 14.5858 22.1642 14.25 21.75 14.25H15.75V8.25Z" fill="white"/>
          </svg>     
        `;
        element.dataset.open = "false";
      }
    });
  });
}
accordion();
