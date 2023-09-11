$.extend($.ui.slider.prototype.options, { animate: 300 });

// Long MA Slider 
const longMASlider = $("#longMA-slider"); 
const longMAValue = $("#longMA-value");

longMASlider.slider({
    max: 500,
    min: 1,
    range: false, 
    slide: function(event, ui) { longMAValue.val(ui.value); } });

longMAValue.on("input", function() { const value = $(this).val(); longMASlider.slider("value", value); });

// Short MA Slider 
const shortMASlider = $("#shortMA-slider"); const shortMAValue = $("#shortMA-value");

shortMASlider.slider({
    max: 500,
    min: 1,
    range: false,
    slide: function(event, ui) { shortMAValue.val(ui.value); } });

shortMAValue.on("input", function() { const value = $(this).val(); shortMASlider.slider("value", value); });

// Long X Slider 
const longXSlider = $("#longX-slider"); const longXValue = $("#longX-value");

longXSlider.slider({
    max: 50,
    min: 1,
    range: false,
    slide: function(event, ui) { longXValue.val(ui.value); } 
});

longXValue.on("input", function() { const value = $(this).val(); longXSlider.slider("value", value); });

// Short X Slider 
const shortXSlider = $("#shortX-slider"); const shortXValue = $("#shortX-value");

shortXSlider.slider({
    max: 50,
    min: 1,
    range: false,
    slide: function(event, ui) { shortXValue.val(ui.value); } });

shortXValue.on("input", function() { const value = $(this).val(); shortXSlider.slider("value", value); })

$("#longMA-slider, #shortMA-slider, #longX-slider, #shortX-slider")
    .slider("pips", {
        first: "pip",
        last: "pip"
    })
    .slider("float");