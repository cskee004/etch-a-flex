// Goal 1: Implement a set of boxes that change color on mouse over events
// Goal 2: Implement a method that takes two non-negative integers as input from keyboard
// Goal 3: Implement a method that creates n amount of individual flex boxes. 
// Goal 4: 



const container = document.querySelector("#container");
console.log(container);

container.addEventListener("mouseover", (event) => {
    
    event.target.style.backgroundColor = "black"

    setTimeout(() => {event.target.style.backgroundColor = "white";}, 1000);
  },
  false,
);
