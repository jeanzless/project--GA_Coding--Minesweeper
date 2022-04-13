const grid = document.querySelector('.grid');
const gridList = document.querySelectorAll('.grid div');

const leftWall = [8, 16, 24, 32, 40, 48];
const arrayGrid = [];
const rightWall = [7];


gridList.forEach((i) => {
  arrayGrid.push(i);
  i.textContent = arrayGrid[i];

  i.addEventListener(('click'), (event) => {
    const bombs = document.querySelector('#bomb');
    if (event.target.id === 'bomb'){

      console.log('BOOM!!');
      console.log(arrayGrid[i]);

    } else if (event.target.class === 'cell' && !event.target.id === 'bomb'){

      console.log('empty Cell');

    }
  })
})

for (let i = 0; i < 8; i++){
  var ranBomb = arrayGrid[Math.floor(Math.random() * arrayGrid.length)];
  ranBomb.setAttribute('id','bomb');
}

const leftWalls = leftWall.filter(number => {
  if (arrayGrid[number].id === 'bomb'){
    return number;
  }
})

console.log(leftWalls)

for (let i = 0; i < arrayGrid.length; i++) {
  if (arrayGrid[i].id === 'bomb'){
    // arrayGrid[i + 1].setAttribute('id', 'nextTo');
    // arrayGrid[i + 8].setAttribute('id', 'nextTo');
    // arrayGrid[i + 7].setAttribute('id', 'nextTo');
    // arrayGrid[i + 9].setAttribute('id', 'nextTo');
    // arrayGrid[i - 1].setAttribute('id', 'nextTo');
    // arrayGrid[i - 8].setAttribute('id', 'nextTo');
    // arrayGrid[i - 7].setAttribute('id', 'nextTo');
    // arrayGrid[i - 9].setAttribute('id', 'nextTo');
    
  }
  leftWalls.map(number => {
    if (number === i){
      if (arrayGrid[i - 8].id !== 'bomb' || arrayGrid[i - 7].id !== 'bomb' || arrayGrid[i + 1].id !== 'bomb' || arrayGrid[i + 8].id !== 'bomb' || arrayGrid[i + 9].id !== 'bomb') {
        console.log(arrayGrid[i]);
        arrayGrid[i - 8].setAttribute('id', 'nextTo');
        arrayGrid[i - 7].setAttribute('id', 'nextTo');
        arrayGrid[i + 1].setAttribute('id', 'nextTo');
        arrayGrid[i + 8].setAttribute('id', 'nextTo');
        arrayGrid[i + 9].setAttribute('id', 'nextTo');
        arrayGrid[i].setAttribute('id', 'bomb');
      }
    }
  })

}
// for (let i = 0; i < 8; i++){
//   var ranBomb = arrayGrid[Math.floor(Math.random() * arrayGrid.length)];
//   console.log(ranBomb);
//   ranBomb.setAttribute('id','bomb');
// }













// function createGrid() {
//   for (let i = 0; i < totalCells; i++){

//     const cell = document.createElement('div');
//     cell.classList.add('cell');
//     arrayGrid.push(i);
//     cell.textContent = i + 1;
//     grid.appendChild(cell);
//     cell.addEventListener('click', () => {
//       console.log(cell.innerHTML);  
//     })
//   }
//   for (let i = 0; i < 5; i++){
//     var ranBomb = arrayGrid[Math.floor(Math.random() * arrayGrid.length)];
//     console.log(ranBomb);
//     console.log(arrayGrid[ranBomb])
//   }
// }




// function startGame(){

//   createGrid();

// }
// startGame('');
