let players = ["x", "o"]
let activePlayer;
let board;
let boardSize = 3

function startGame(){
    board = [];
    activePlayer = 0;

    for (row = 0; row < boardSize; row++){
        board[row] = [];
        for (let column = 0; column < boardSize; column++){
            board[row][column] = "";
        }
    }
    renderBoard(board)
}

function click(boardRow, boardColumn){
    if (board[boardRow][boardColumn] !== "") {
        return;
    }

    const userItem = players[activePlayer];
    board[boardRow][boardColumn] = userItem;

    checkWin(userItem)
    if (activePlayer === 0){
        activePlayer++;
    }
    else{
        activePlayer--;
    }

    renderBoard(board)
}

function checkWin(userItem){
    for (let checkRow = 1; checkRow < (boardSize - 1); checkRow++){
        for (let checkColumn = 1; checkColumn < (boardSize - 1); checkColumn++){
          if (checkWinCase(checkRow, checkColumn, userItem)){
            showWinner(activePlayer);
          }
        }
    }
}

function checkWinCase(checkRow, checkColumn, userItem){
    return (board[checkRow - 1][checkColumn - 1] === userItem && board[checkRow - 1][checkColumn] === userItem && board[checkRow - 1][checkColumn + 1] === userItem) ||
    (board[checkRow][checkColumn - 1] === userItem && board[checkRow][checkColumn] === userItem && board[checkRow][checkColumn + 1] === userItem) ||
    (board[checkRow + 1][checkColumn - 1] === userItem && board[checkRow + 1][checkColumn] === userItem && board[checkRow + 1][checkColumn + 1] === userItem) ||
    /////////////////////////////ГОРИЗОНТАЛЬ//////////////////////////////////////////////
    (board[checkRow - 1][checkColumn - 1] === userItem && board[checkRow][checkColumn] === userItem && board[checkRow + 1][checkColumn + 1] === userItem) ||
    (board[checkRow - 1][checkColumn + 1] === userItem && board[checkRow][checkColumn] === userItem && board[checkRow + 1][checkColumn - 1] === userItem) ||
    /////////////////////////////ДИАГОНАЛЬ////////////////////////////////////////////////
    (board[checkRow - 1][checkColumn - 1] === userItem && board[checkRow][checkColumn - 1] === userItem && board[checkRow + 1][checkColumn - 1] === userItem) ||
    (board[checkRow - 1][checkColumn] === userItem && board[checkRow][checkColumn] === userItem && board[checkRow + 1][checkColumn] === userItem) ||
    (board[checkRow - 1][checkColumn + 1] === userItem && board[checkRow][checkColumn + 1] === userItem && board[checkRow + 1][checkColumn + 1] === userItem)
}