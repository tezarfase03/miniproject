let para = document.getElementById("timer")
let count = 5000;
const intervalid = setInterval(() => {
  para.innerHTML = `${count}`;
  count--;
  if (count < 0) {
    clearInterval(intervalid)
  }
}, 1000);



