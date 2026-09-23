let bgcolor = document.getElementById("bgcolor");
let bgcolorOutput = document.querySelector("output[for='bgcolor']");

let skewx = document.getElementById("skewx");
let skewxOutput = document.querySelector("output[for='skewx']");

let skewy = document.getElementById("skewy");
let skewyOutput = document.querySelector("output[for='skewy']");

let scale = document.getElementById("scale");
let scaleOutput = document.querySelector("output[for='scale']");

let img = document.getElementById("img");

function changeColor(element, colorInput) {
  element.style.bgcolor = colorInput.value;
}

function changeScale(element, scaleInput) {
  element.style.scale = scaleInput.value
}

skewx.addEventListener("input", function() {
  img.style.transform = `skewX(${skewx.value}deg)`;
})

skewy.addEventListener("input", function() {
  img.style.transform = `skewY(${skewy.value}deg)`;
})

scale.addEventListener("input", function() {
  img.style.transform = `scale(${scale.value})`;
})

bgcolor.addEventListener("input", function() {
  img.style.backgroundColor = bgcolor.value;
})  