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
const defaultGrid = 16;
//----------------------------------------------------------------------------->

bodySetup();

headerSetup();
 
containerSetup();

createGrid(defaultGrid);

//----------------------------------------------------------------------------->
/**
 * 
 */
function randomNumber(number) {
  return Math.floor(Math.random() * number);
}
//----------------------------------------------------------------------------->
/**
 * 
 */
function randomColor() {
  let color = `rgb(${randomNumber(255)} ${randomNumber(255)} ${randomNumber(255)})`;
  return color;
}
//----------------------------------------------------------------------------->
/**
 * @param {*} input Specifies grid dimensions 
 * 
 */
function createGrid(input) {
  
  for(let i = 0; i < input; i++){
    createRow();
  };
  
  const rowList = document.querySelectorAll(".row");
  
  for (let j = 0; j < input; ++j){
    rowList.forEach(element => {
      createColumn(element);
    })
  };
  
}
//----------------------------------------------------------------------------->
/**
 * "#faf0e5"
 */
container.addEventListener("mouseover", (event) => {
    
  event.target.style.backgroundColor = randomColor();

  //setTimeout(() => {event.target.style.backgroundColor = "#faf0e5";}, 1000);
},
false,
);
//----------------------------------------------------------------------------->
/**
 * 
 */
header.addEventListener("click", (event) => {
  let input = prompt("Enter grid dimension: ", "e.g. 64 for 64 x 64 grid");
  const rowList = document.querySelectorAll(".row");

  rowList.forEach(element => {
    container.removeChild(element);
  })
  
  createGrid(input);

})
//----------------------------------------------------------------------------->
/**
 * Child container
 * @param {*} element Represents a row element to create coloumn within.
 */
function createColumn(element) {
  let column = document.createElement("div");
  column.className = "column";
  column.style.flex = "1 1 auto";
  column.style.aspectRatio = "1/1";
  column.style.opacity = "1";
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
  row.style.flexWrap = "wrap";
  container.append(row);
}
//----------------------------------------------------------------------------->
/**
 * Parent container
 */
function containerSetup() {
  container.style.maxWidth = "960px";
  container.style.padding = "0px"
  container.style.margin = "0 auto";
  container.style.maxHeight = "960px"
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
 * Parent container
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
 * Child container
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
 * Child container
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