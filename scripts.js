const colorDarkCell = "black";
const colorLightCell = "white";

function drawBoard() {
  var board = document.getElementById("board");

  for (let i = 1; i <= 8; i++) {
    var col = document.createElement("div");
    col.id = `col:${i}`;
    col.classList.add("col", i % 2 === 0 ? "even" : "odd");
    board.appendChild(col);

    for (let j = 8; j >= 1; j--) {
      var cell = document.createElement("div");
      cell.id = `cell:${j}.${i}`;
      cell.classList.add("cell");
      col.appendChild(cell);
    }
  }
}

function isAllEven(num) {
  let isEven = true;
  num.forEach((n) => {
    console.log(n % 2 === 0);
    if (n % 2 !== 0) isEven = false;
  });
  return isEven;
}

function isAllOdd(num) {
  let isOdd = true;
  num.forEach((n) => {
    if (n % 2 === 0) isOdd = false;
  });
  return isOdd;
}

function insertPieces() {
  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      var currentCell = document.getElementById(`cell:${i}.${j}`);

      if (isAllEven([i, j]) || isAllOdd([i, j])) {
        var piece = document.createElement("div");
        piece.id = i <= 3 ? "pieceLight" : "pieceDark";
        currentCell.appendChild(piece);
      }
    }
    if (i === 3) i = 5;
  }
}

drawBoard();
insertPieces();
