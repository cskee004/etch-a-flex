// Goal 1: Implement a box that changes colors and dims on mouse hover
// Goal 2: Implement that same box but only using javascript

const container = document.querySelector("#container");
console.log(container);

container.addEventListener("mouseover", (event) => {
    // highlight the mouseenter target
    event.target.style.backgroundColor = "black"

    // reset the color after a short delay
    setTimeout(() => {event.target.style.backgroundColor = "white";}, 1000);
  },
  false,
);
