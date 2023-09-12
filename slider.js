// Long MA Slider
const longMASlider = document.querySelector("#longMA-slider");
const longMAValue = document.querySelector("#longMA-value");

longMASlider.addEventListener("input", function(event) {
  const value = event.target.value;
  longMAValue.value = value;
});

longMAValue.addEventListener("input", function(event) {
  const value = event.target.value;
  longMASlider.value = value;
});

// Short MA Slider
const shortMASlider = document.querySelector("#shortMA-slider");
const shortMAValue = document.querySelector("#shortMA-value");

shortMASlider.addEventListener("input", function(event) {
  const value = event.target.value;
  shortMAValue.value = value;
});

shortMAValue.addEventListener("input", function(event) {
  const value = event.target.value;
  shortMASlider.value = value;
});

// Long X Slider
const longXSlider = document.querySelector("#longX-slider");
const longXValue = document.querySelector("#longX-value");

longXSlider.addEventListener("input", function(event) {
  const value = event.target.value;
  longXValue.value = value;
});

longXValue.addEventListener("input", function(event) {
  const value = event.target.value;
  longXSlider.value = value;
});

// Short X Slider
const shortXSlider = document.querySelector("#shortX-slider");
const shortXValue = document.querySelector("#shortX-value");

shortXSlider.addEventListener("input", function(event) {
  const value = event.target.value;
  shortXValue.value = value;
});

shortXValue.addEventListener("input", function(event) {
  const value = event.target.value;
  shortXSlider.value = value;
});