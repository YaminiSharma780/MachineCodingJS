const gameContainer = document.querySelector(".child");
const reset = document.querySelector(".reset");
const squares = document.querySelectorAll(".square");

let unique = {};
let chance = true;
let allFilled = 0;

reset.addEventListener("click", () => {
  squares.forEach((square) => {
    square.classList.remove("fill-X", "fill-O");
  });
  unique = {};
  chance = true;
  allFilled = 0;
  chance = true;
  squares.forEach((square) => {
    square.style.pointerEvents = "auto";
  });
  document.querySelector(".result").textContent = "Play to Win";
});

gameContainer.addEventListener("click", (e) => {
  const currElement = e.target.dataset.index;
  console.log(currElement);

  if (currElement) {
    if (!unique[currElement]) {
      if (chance) {
        unique[currElement] = "X";
        e.target.classList.add("fill-X");
      } else {
        unique[currElement] = "O";
        e.target.classList.add("fill-O");
      }

      chance = !chance;
      allFilled++;

      let result = checkWin();
      if (allFilled == 9 || result.includes("Win")) {
        document.querySelector(".result").textContent = result;
        gameContainer.style.pointerEvents = "none";
        squares.forEach((square) => {
          square.style.pointerEvents = "none";
        });
      }
    }
  } else {
    e.preventDefault();
    console.log("dragging");
  }
});

function checkWin() {
  //row
  for (let i = 0; i < 3; i++) {
    let set = new Set();
    let player = "";
    for (let j = 0; j < 3; j++) {
      // let key = ${i}-${j};: This creates a string key like "0-0", "0-1", "0-2", etc.,
      // which corresponds to the unique object to retrieve the value of the square
      // (either "X", "O", or undefined if unfilled)
      let key = `${i}-${j}`;

      // checks which value is stored in square at key either "X", "O", or undefined
      set.add(unique[key]);

      // player gets the value inserted in set for that key either "X" or "O"
      player = unique[key];
    }
    console.log(set, player);

    // if row/column has only single player then it's a win
    // but if row/column is fully empty then undefined could win
    // therefore we give condition to check if any player is there
    if (set.size == 1 && player) {
      return `Player ${player} Win`;
    }
  }

  //col
  for (let j = 0; j < 3; j++) {
    let set = new Set();
    let player = "";
    for (let i = 0; i < 3; i++) {
      let key = `${i}-${j}`;
      set.add(unique[key]);
      player = unique[key];
    }
    console.log(set, player);
    if (set.size == 1 && player) {
      return `Player ${player} Win`;
    }
  }

  // diagonal
  let i = 0;
  let j = 0;
  let set = new Set();
  let player = "";
  while (i < 3 && j < 3) {
    let key = `${i}-${j}`;
    set.add(unique[key]);
    player = unique[key];
    i++;
    j++;
  }
  console.log(set, player);
  if (set.size == 1 && player) {
    return `Player ${player} Win`;
  }

  // anti-diagonal
  i = 0;
  j = 2;
  set.clear();
  while (i < 3 && j >= 0) {
    let key = `${i}-${j}`;
    set.add(unique[key]);
    player = unique[key];
    i++;
    j--;
  }
  console.log(set, player);
  if (set.size == 1 && player) {
    return `Player ${player} Win`;
  }

  return "Match draw";
}
