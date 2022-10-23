/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import "leaflet";

function renderingMapOfSauna() {
  let isFullScreen = false;

  let map;

  function renderSaunaMap() {
    let mapOptions = {
      center: [50.4368368475358, 30.401243422712376],
      zoom: 12,
      zoomControl: false,
    };

    map = new L.map("map-sauna", mapOptions);

    let layer = new L.TileLayer(
      "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    );

    L.control
      .zoom({
        position: "topright",
      })
      .addTo(map);

    map.addLayer(layer);

    var locationSauna = L.icon({
      iconUrl: "img/SAUNA/icon/location-sauna.svg",
      iconSize: [25, 25],
      popupAnchor: [-3, -25],
    });

    L.marker([50.4368368475358, 30.401243422712376], {
      icon: locationSauna,
    })

      .addTo(map)
      .bindPopup("Сауна Аквамарин");
  }

  renderSaunaMap();

  function getLocationSauna() {
    const locationBtn = document.querySelector(".map-sauna__location");
    locationBtn.addEventListener("click", () => {
      const successCallback = ({ coords }) => {
        console.log(coords.latitude);
      };

      const errorCallback = (error) => {
        console.log(error);
      };

      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    });
  }

  getLocationSauna();
}
renderingMapOfSauna();
