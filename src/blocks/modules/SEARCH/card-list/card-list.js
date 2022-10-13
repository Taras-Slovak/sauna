const getLineBottom = document.querySelectorAll(".search-card__line-bottom");

getLineBottom[getLineBottom.length - 1].style.display = "none";

const getPaginationLinks = document.querySelectorAll(".page-href");

getPaginationLinks.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("pagination-active");
  });
});
