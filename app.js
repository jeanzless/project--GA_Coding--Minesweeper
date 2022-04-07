
const cells = []; 
// const state = {



//   bomb: false, //check if there is a bomb 
//   nextTo: false, // check if grid is next to a bomb
//   empty: false, // check ifchecks if the grid is empty
//   hidden: false, // checks if the bomb is hidden meaning it might have a bomb or not (can be marked)
//   marked: false,// checks if the grid has been marked.

// }
const width = 5;
const totalCell = width * width;


// const gridElems = document.querySelectorAll('div');
const grid = document.querySelector('.grid');

console.log(grid);


function createGrid() {
  for (let i = 0; totalCell - 1; i++){

    const cell = document.createElement('div');
    cell.classList.add('grid')
    cell.innerHTML = i;
    // grid.appendChild(cell);
    cells.push(cell)
  }
}

createGrid();