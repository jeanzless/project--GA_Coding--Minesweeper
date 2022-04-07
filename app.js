const grid = document.querySelector('.grid');
const width = 8;
const totalCells = width * width;
const gridList = document.querySelectorAll('.grid div');
const main = document.querySelectorAll('body');
let mode = null;
console.log(grid);
console.log(gridList);

function createGrid() {
  for (let i = 0; i < totalCells; i++){

    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = i + 1;
    grid.appendChild(cell);
    cell.addEventListener('click', () => {
      console.log(cell.innerHTML);
    })

  }
  console.log(gridList);
}

function startGame(mode){

  createGrid();

}
startGame('');
