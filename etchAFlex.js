const container = document.querySelector("#container");
console.log(container);

container.addEventListener("mouseover", (event) => {
    
    event.target.style.backgroundColor = "black"

    setTimeout(() => {event.target.style.backgroundColor = "white";}, 1000);
  },
  false,
);
