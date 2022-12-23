/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import 'leaflet';

let isFullScreen = false;

let map;

function renderMyMap() {
  let mapOptions = {
    center: [50.4368368475358, 30.401243422712376],
    zoom: 12,
    zoomControl: false,
  };

  map = new L.map('my-map', mapOptions);

  let layer = new L.TileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  );

  L.control
    .zoom({
      position: 'topright',
    })
    .addTo(map);

  map.addLayer(layer);

  var locationSauna = L.icon({
    iconUrl: 'img/SEARCH/map/location-sauna.svg',
    iconSize: [25, 25],
    popupAnchor: [-3, -25],
  });

  L.marker([50.481431223379865, 30.39808773689317], {
    icon: locationSauna,
  })
    .addTo(map)
    .bindPopup('Сауна Аквамарин');
  L.marker([50.47137871796593, 30.372233193653827], {
    icon: locationSauna,
  })
    .addTo(map)
    .bindPopup('Сауна Аквамарин');
  L.marker([50.46558929098933, 30.364096807395054], {
    icon: locationSauna,
  })
    .addTo(map)
    .bindPopup('Сауна Аквамарин');
  L.marker([50.47563591367001, 30.421065088001715], {
    icon: locationSauna,
  })
    .addTo(map)
    .bindPopup('Сауна Аквамарин');
  L.marker([50.43755788840393, 30.39711101941428], {
    icon: locationSauna,
  })
    .addTo(map)
    .bindPopup('Сауна Аквамарин');
  L.marker([50.43235820151973, 30.4473325232155], {
    icon: locationSauna,
  })
    .addTo(map)
    .bindPopup('Сауна Аквамарин');
}

renderMyMap();

function getMyLocation() {
  const locationBtn = document.querySelector('.my-map__location');
  locationBtn.addEventListener('click', () => {
    const successCallback = ({ coords }) => {
      console.log(coords.latitude);
    };

    const errorCallback = (error) => {
      console.log(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  });
}

getMyLocation();
