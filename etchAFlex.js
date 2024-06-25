// Goal 1: Implement a set of boxes that change color on mouse over events
// Goal 2: Create a webpage with a 16x16 grid of flex boxes 
// Goal 3: Implement a method that takes two non-negative integers amd returns
// Goal 4: Implement a method that creates n amount of individual flex boxes.

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

const body = document.body;
const container = document.querySelector(".container");
const row = document.querySelector(".row")



//----------------------------------------------------------------------------->

bodySetup();
 
containerSetup();

createGrid();


// size of 16 x 16 grid 

/**
 * Create n number of rows, then for each row, create n number of columns. 
 */
function createGrid() {
  
  for(let i = 0; i < 4; i++){
    createRow();
  }
  const rowList = document.querySelectorAll(".row")
  let rowArray = Array.from(rowList);
  console.log(rowArray)

  rowList.forEach(element => {
    createColumn(element);
    createColumn(element);
    createColumn(element);
    createColumn(element);
  });
}
//----------------------------------------------------------------------------->
/**
 * 
 */
container.addEventListener("mouseover", (event) => {
    
    event.target.style.backgroundColor = "black"

    setTimeout(() => {event.target.style.backgroundColor = "white";}, 1000);
  },
  false,
);
//----------------------------------------------------------------------------->
/**
 * 
 * @param {*} element Represents a parent node. The parent node is used to attach a child element.
 */
function createColumn(element) {
  const row = document.querySelector(".row")
  let column = document.createElement("div");
  column.className = "column";
  column.style.flex = "1";
  column.style.padding = "1rem 0";
  element.append(column)
}
//----------------------------------------------------------------------------->
/**
 * 
 */
function createRow() {
  let row = document.createElement("div");
  row.className = "row";
  row.style.display = "flex";
  container.append(row);
}
//----------------------------------------------------------------------------->
/**
 * 
 */
function containerSetup() {
  container.style.maxWidth = "960px";
  container.style.margin = "0 auto";
}
//----------------------------------------------------------------------------->
/**
 * 
 */
function bodySetup() {
  body.style.fontFamily = "'Open Sans', sans-serif";
  body.style.textAlign = "center";
  body.style.padding = "1rem";
}
