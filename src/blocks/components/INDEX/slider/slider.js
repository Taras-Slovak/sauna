/* eslint-disable no-unused-vars */
import { Carousel } from "bootstrap";

const sliderPopular = document.querySelector("#slider-popular");
const popular = new Carousel(sliderPopular, {
  wrap: true,
});

const sliderOffer = document.querySelector("#slider-offer");
const offer = new Carousel(sliderOffer, {
  wrap: true,
});
