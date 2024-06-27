# etch-a-flex

For this project, I created a Etch-A-Sketch pad using only CSS Flexbox. 
The project instructions can be found [here](https://www.theodinproject.com/lessons/foundations-etch-a-sketch)

## Process
I started by creating a helper function to append a single row to the parent container and another helper function to create and append a column to its row parent. This allowed me to set up a simple 4x4 grid. I then implemented a mouse event to change the grid space color to black, later updating it to a random color on hover.

To automate grid creation, I wrote a function that takes a single non-negative integer representing the number of grid squares. Rows were appended directly to an element in the DOM in a loop. After adding the rows, I used a query selector to get all row elements and a nested loop to add columns to each row. Once the core functionality was in place, I focused on improving the visual design.