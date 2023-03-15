let container = document.querySelector(".container");
let qrInput = document.querySelector("#text");
let generateBTN = document.querySelector("#generate");
let img = document.querySelector("#qr-img");

let preInput;

generateBTN.onclick = function () {
  let input = qrInput.value.trim();

  if (!input || input === preInput) {
    alert("Text field should not be  empty and differ from previous field");
    return;
  } else {
    preInput = input;
    generateBTN.innerText = "Generating QR Code...";
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input}`;
    img.onload = function () {
      container.classList.add("active");
      generateBTN.innerText = "Generate QR Code";
    };
  }
};
