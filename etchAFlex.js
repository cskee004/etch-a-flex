// Goal 1: Implement a set of boxes that change color on mouse over events
// Goal 2: Create a webpage with a 16x16 grid of flex boxes 
// Goal 3: Implement a method that takes two non-negative integers amd returns
// Goal 4: Implement a method that creates n amount of individual flex boxes.


// Colors:
//    Body background: #36454f
//    Heading text: #FFFFF0
//    Sketch pad background: #FAF0E5
// Fonts:
//    Body: Roboto

//----------------------------------------------------------------------------->
const body = document.body;
const container = document.querySelector(".container");
const row = document.querySelector(".row")
//----------------------------------------------------------------------------->

bodySetup();
 
containerSetup();

createGrid();

//----------------------------------------------------------------------------->
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

  setTimeout(() => {event.target.style.backgroundColor = "#faf0e5";}, 1000);
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
  container.style.backgroundColor = "#faf0e5";
}
//----------------------------------------------------------------------------->
/**
 * 
 */
function bodySetup() {
  body.style.fontFamily = "'Roboto', sans-serif";
  body.style.textAlign = "center";
  body.style.backgroundColor = "#36454f";
  body.style.color = "#FFFFF0";
  body.style.fontSize = "36px";
}
