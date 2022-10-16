/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import "leaflet";

let isFullScreen = false;

let map;

function renderMap() {
  let mapOptions = {
    center: [50.459235610457284, 30.36476092787283],
    zoom: 12,
    zoomControl: false,
  };

  map = new L.map("map", mapOptions);

  let layer = new L.TileLayer(
    "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  );

  L.control
    .zoom({
      position: "topright",
    })
    .addTo(map);

  map.addLayer(layer);
}

renderMap();

function fullScreenMap() {
  const hideBtn = document.querySelector(".map__full-btn");
  const getMap = document.querySelector(".map__map-content");
  const getCardList = document.querySelector(".card-list");

  hideBtn.addEventListener("click", () => {
    if (!isFullScreen) {
      map.remove();
      hideBtn.innerHTML = `  
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.865 22.1666C12.0393 22.1672 12.2115 22.1287 12.369 22.054C12.5265 21.9793 12.6652 21.8703 12.775 21.7349L18.41 14.7349C18.5816 14.5262 18.6754 14.2643 18.6754 13.9941C18.6754 13.7239 18.5816 13.462 18.41 13.2532L12.5767 6.25325C12.3786 6.015 12.0941 5.86517 11.7856 5.83672C11.4771 5.80828 11.1699 5.90355 10.9317 6.10158C10.6934 6.29961 10.5436 6.58417 10.5152 6.89267C10.4867 7.20117 10.582 7.50833 10.78 7.74658L15.995 13.9999L10.955 20.2532C10.8123 20.4245 10.7217 20.633 10.6939 20.8542C10.666 21.0753 10.7021 21.2998 10.7978 21.5011C10.8935 21.7024 11.0449 21.872 11.2341 21.99C11.4232 22.1079 11.6421 22.1692 11.865 22.1666Z"/>
      </svg>
      <p>Показать список</p>
      `;
      getCardList.classList.add("card-list-hide");
      getMap.classList.add("card-full-screen");
      renderMap();
      isFullScreen = !isFullScreen;
    } else {
      map.remove();
      hideBtn.innerHTML = `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.135 22.1666C15.9607 22.1672 15.7885 22.1287 15.631 22.054C15.4735 21.9793 15.3348 21.8703 15.225 21.7349L9.58999 14.7349C9.41839 14.5262 9.32458 14.2643 9.32458 13.9941C9.32458 13.7239 9.41839 13.462 9.58999 13.2532L15.4233 6.25325C15.6214 6.015 15.9059 5.86517 16.2144 5.83672C16.5229 5.80828 16.8301 5.90355 17.0683 6.10158C17.3066 6.29961 17.4564 6.58417 17.4848 6.89267C17.5133 7.20117 17.418 7.50833 17.22 7.74658L12.005 13.9999L17.045 20.2533C17.1877 20.4245 17.2783 20.633 17.3061 20.8542C17.334 21.0753 17.2979 21.2998 17.2022 21.5011C17.1065 21.7024 16.9551 21.872 16.7659 21.99C16.5768 22.1079 16.3579 22.1692 16.135 22.1666Z" fill="black"/>
        </svg>
        `;

      getCardList.classList.remove("card-list-hide");
      getMap.classList.remove("card-full-screen");
      renderMap();
      isFullScreen = !isFullScreen;
    }
  });
}
fullScreenMap();
