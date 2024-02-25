const body = document.getElementsByTagName("body")[0]

function setcolor(name) {
  body.style.backgroundColor = name;
}
function randomcolor() {

  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  const color = `rgb(${red},${green},${blue})`;
  body.style.backgroundColor = color;
  startRandom.style.backgroundColor = color;

}

function startRandomColor() {
  intervalId = setInterval(randomcolor, 200); 
}

function stopRandomColor() {
  clearInterval(intervalId); 
}
