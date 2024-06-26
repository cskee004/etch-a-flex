// Colors:
//    Body background: #36454f
//    Heading text: #FFFFF0
//    Sketch pad background: #FAF0E5
// Fonts:
//    Body: Roboto

//----------------------------------------------------------------------------->
const body = document.body;
const header = document.querySelector(".header")
const container = document.querySelector(".container");
const row = document.querySelector(".row")
//----------------------------------------------------------------------------->

bodySetup();

headerSetup();
 
containerSetup();

createGrid();

//----------------------------------------------------------------------------->
/**
 * @param {*} gridBoxHeight Specifies how many boxes high 
 * @param {*} gridBoxWidth Specifies how many boxes wide
 */
function createGrid(gridBoxHeight, gridBoxWidth) {
  
  for(let i = 0; i < 100; i++){
    createRow();
  };
  
  const rowList = document.querySelectorAll(".row");
  
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
 * 
 */
header.addEventListener("click", (event) => {
  // prompt the user
})
//----------------------------------------------------------------------------->
/**
 * Child container
 * @param {*} element Represents a row element to create coloumn within.
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
  body.style.backgroundColor = "#36454f";

}
//----------------------------------------------------------------------------->
/**
 * 
 */
function headerSetup() {
  header.style.display = "flex";
  header.style.padding = "18px"
  header.style.justifyContent = "center";
  header.style.gap = "100px";
  titleSetup();
  buttonSetup();
}
//----------------------------------------------------------------------------->
/**
 * 
 */
function titleSetup() {
  let title = document.createElement("div");
  title.style.color = "#FFFFF0";
  title.style.fontSize = "36px";
  title.style.fontWeight = "800";
  title.innerHTML = "Etch A Flex";
  header.append(title);
}
//----------------------------------------------------------------------------->
/**
 * 
 */
function buttonSetup() {
  let button = document.createElement("button");
  button.type = "button";
  button.innerHTML = "Create New Grid";
  button.style.cursor = "pointer";
  button.style.padding = "8px 16px";
  button.style.borderRadius = "8px";
  header.append(button);
}