const grid = document.querySelector('.grid');
const gridList = document.querySelectorAll('.grid div');

const leftWall = [8, 16, 24, 32, 40, 48];
const bombGrid = [];
const arrayGrid = [];
const rightWall = [15, 23, 31, 39, 47, 55];
const topWall = [1, 2, 3, 4, 5, 6]
const bottomWall = [57, 58, 59, 60, 61, 62];


gridList.forEach((i) => {
  arrayGrid.push(i);
  i.textContent = arrayGrid[i];

  i.addEventListener(('click'), (event) => {
    const bombs = document.querySelector('#bomb');
    if (event.target.id === 'bomb'){

      console.log('BOOM!!');
      console.log(arrayGrid[i]);                      //CLICK EVENTS

    } else if (event.target.class === 'cell' && !event.target.id === 'bomb'){

      console.log('empty Cell');

    }
  })
})

for (let i = 0; i < 8; i++){
  var ranBomb = arrayGrid[Math.floor(Math.random() * arrayGrid.length)];
  bombGrid.push(ranBomb);    //CHOOSES RANDOM BOMBS WITHIN THE GRID
  console.log(bombGrid);
  ranBomb.setAttribute('id','bomb');
}

const leftWalls = leftWall.filter(number => {
  if (arrayGrid[number].id === 'bomb'){
    return number;
  }
})

const rightWalls = rightWall.filter(number => {
  if (arrayGrid[number].id === 'bomb'){
    return number;
  }
})

const topWalls = topWall.filter(number => {
  if (arrayGrid[number].id === 'bomb'){
    return number;
  }
})

const bottomWalls = bottomWall.filter(number => {
  if (arrayGrid[number].id === 'bomb'){
    return number;
  }
})

for (let i = 0; i < arrayGrid.length; i++) {
  leftWalls.map(number => {
    if (number === i){
      if (arrayGrid[i - 8].id !== 'bomb' || arrayGrid[i - 7].id !== 'bomb' || arrayGrid[i + 1].id !== 'bomb' || arrayGrid[i + 8].id !== 'bomb' || arrayGrid[i + 9].id !== 'bomb') {
        arrayGrid[i - 8].setAttribute('id', 'nextTo');
        arrayGrid[i - 7].setAttribute('id', 'nextTo');
        arrayGrid[i + 1].setAttribute('id', 'nextTo');
        arrayGrid[i + 8].setAttribute('id', 'nextTo');
        arrayGrid[i + 9].setAttribute('id', 'nextTo');
        arrayGrid[i].setAttribute('id', 'bomb');
      } 
    }
  })
  rightWalls.map(number => {
    if (number === i){
      if (arrayGrid[i - 8].id !== 'bomb' || arrayGrid[i - 9].id !== 'bomb' || arrayGrid[i - 1].id !== 'bomb' || arrayGrid[i + 8].id !== 'bomb' || arrayGrid[i + 7].id !== 'bomb') {
        arrayGrid[i - 9].setAttribute('id', 'nextTo');
        arrayGrid[i - 8].setAttribute('id', 'nextTo');
        arrayGrid[i - 1].setAttribute('id', 'nextTo');
        arrayGrid[i + 8].setAttribute('id', 'nextTo');
        arrayGrid[i + 7].setAttribute('id', 'nextTo');
        arrayGrid[i].setAttribute('id', 'bomb');
      }
    }
  })
  topWalls.map(number => {
    if (number === i){
      if (arrayGrid[i + 8].id !== 'bomb' || arrayGrid[i - 1].id !== 'bomb' || arrayGrid[i + 7].id !== 'bomb' || arrayGrid[i + 9].id !== 'bomb' || arrayGrid[i + 1].id !== 'bomb'){
        arrayGrid[i + 1].setAttribute('id', 'nextTo');
        arrayGrid[i + 7].setAttribute('id', 'nextTo');
        arrayGrid[i + 8].setAttribute('id', 'nextTo');
        arrayGrid[i + 9].setAttribute('id', 'nextTo');
        arrayGrid[i - 1].setAttribute('id', 'nextTo');
        arrayGrid[i].setAttribute('id', 'bomb');
      }
    }
  })
  bottomWalls.map(number => {
    if (number === i){
      if (arrayGrid[i + 1].id !== 'bomb' || arrayGrid[i - 1].id !== 'bomb' || arrayGrid[i - 8].id !== 'bomb' || arrayGrid[i - 7].id !== 'bomb' || arrayGrid[i - 9].id !== 'bomb'){
        arrayGrid[i + 1].setAttribute('id', 'nextTo');
        arrayGrid[i - 7].setAttribute('id', 'nextTo');
        arrayGrid[i - 8].setAttribute('id', 'nextTo');
        arrayGrid[i - 9].setAttribute('id', 'nextTo');
        arrayGrid[i - 1].setAttribute('id', 'nextTo');
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
