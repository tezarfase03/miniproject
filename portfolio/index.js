
let daynight = document.querySelector(".daynight");
let bg = document.querySelector(".banner");

daynight.addEventListener("click", () => {
  console.log("Clicked!");
  bg.classList.toggle("night");
});
let typEffect = new Typed("#Drop", {
  // strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  strings: [ "Competative Programmer", "Backend Devloper"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 50,
  typeDelay: 1000

})

