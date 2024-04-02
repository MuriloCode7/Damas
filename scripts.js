function drawBoard() {
  var board = document.getElementById("board");

  for (let i = 0; i < 8; i++) {
    var row = document.createElement("div");
    row.id = `row:${i}`;
    row.classList.add("row");
    row.classList.add(i % 2 === 0 ? "even" : "odd");
    board.appendChild(row);

    for (let j = 0; j < 8; j++) {
      var cell = document.createElement("div");
      cell.id = `cell:${i}.${j}`;
      cell.classList.add("cell");
      row.appendChild(cell);
    }
  }
}

drawBoard();
