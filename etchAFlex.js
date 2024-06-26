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
  
  for(let i = 0; i < 100; i++){
    createRow();
  };
  
  const rowList = document.querySelectorAll(".row");
  let rowArray = Array.from(rowList);
  console.log(rowArray);

  for (let j = 0; j < 100; ++j){
    rowList.forEach(element => {
      createColumn(element);
    })
  };
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
 * Child container
 * @param {*} element Represents a parent node. The parent node is used to attach a child element.
 */
function createColumn(element) {
  let column = document.createElement("div");
  column.className = "column";
  column.style.flex = "1";
  column.style.flexBasis = "100%";
  column.style.aspectRatio = "1/1";
  

  
  
  element.append(column)
}
//----------------------------------------------------------------------------->
/**
 * Parent container 
 */
function createRow() {
  let row = document.createElement("div");
  row.className = "row";
  //row.style.border = "2px solid black"
  row.style.display = "flex";
  
  
  container.append(row);
}
//----------------------------------------------------------------------------->
/**
 * 
 */
function containerSetup() {
  container.style.maxWidth = "960px";
  container.style.padding = "0px"
  container.style.margin = "0 auto";
  container.style.height = "960px"
  container.style.border = "2px solid black"
  
}
//----------------------------------------------------------------------------->
/**
 * 
 */
function bodySetup() {
  body.style.fontFamily = "'Open Sans', sans-serif";
  body.style.textAlign = "center";
}
