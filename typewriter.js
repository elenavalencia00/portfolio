var i = 0;
var txt = '>_Elena Valencia'; 
var speed = 80; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typed-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeWriter();
});
