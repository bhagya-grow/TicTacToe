const apiUrl = "http://localhost:3000";
let gameId = 0;
const box = document.querySelectorAll(".box");
const resetButton = document.querySelector(".reset-game");
const newGameButton = document.querySelector(".new-game");
const title = document.getElementById("title");
const xScore = document.querySelector(".x-score");
const oScore = document.querySelector(".o-score");
const player = ["X", "O"];

const VarcantBox = ["", "", "", "", "", "", "", "", "", ""];
let currentPlayer = player[Math.floor(Math.random()*2)];
let xNum = 0;
let oNum = 0;
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
box.forEach((box) => {
  box.addEventListener("click", async () => {
    const pos = parseInt(box.id.split("-")[1]) - 1;
    if (VarcantBox[pos] !== "") {
      title.innerText = "Box is already occupied";
      return;
    }

    // Determine symbol to place and update UI/state
    const symbol = whoseTurn();
    const boxElement = document.getElementById(box.id);
    boxElement.innerText = symbol;
    VarcantBox[pos] = symbol;

    // Ask backend to evaluate win/draw
    await checkWin();
  });
});

function whoseTurn() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
    return "X";
  } else {
    currentPlayer = "X";
    return "O";
  }
}

async function checkWin() {
  // for (let i = 0; i < winningCombos.length; i++) {
  //   const [a, b, c] = winningCombos[i];
  //   if (
  //     VarcantBox[a] &&
  //     VarcantBox[b] === VarcantBox[a] &&
  //     VarcantBox[c] === VarcantBox[a]
  //   ) {
  //     //   alert(`${VarcantBox[a]} has won the game`);
  //     title.innerText = `${VarcantBox[a]} has won the game`;
  //     if(VarcantBox[a]==="X"){
  //       xNum+=1;
  //       xScore.innerText=`X : ${xNum}`;
  //     }else{
  //       oNum+=1;
  //       oScore.innerText=`O : ${oNum}`;
  //     }
  //     return;
  //   }
  // }
  try {
    const response = await fetch(`${apiUrl}/api/win`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify({ varcantBox: VarcantBox, gameId: 0 }),
    });
    const data = await response.json();
    const winner = data.winner;
    if (winner) {
      // Support different backend responses
      if (Array.isArray(winner)) {
        // legacy format [symbol, xNum, oNum]
        title.innerText = `${winner[0]} has won the game`;
        xNum = winner[1] || xNum;
        oNum = winner[2] || oNum;
      } else if (winner === 'DRAW') {
        title.innerText = "It's a Draw!";
      } else {
        title.innerText = `${winner} has won the game`;
      }

      xScore.innerText = `X : ${xNum}`;
      oScore.innerText = `O : ${oNum}`;
    }
  } catch (error) {
    console.error("Error checking win:", error);
    title.innerText = "Server error checking win";
  }
  return;
}

newGameButton.addEventListener("click", async () => {
  console.log("New Game button clicked!");
  try {
    console.log("Fetching /api/new...");
    const response = await fetch(`${apiUrl}/api/new`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    
    const data = await response.json();

    console.log("Response data:", data);
    gameId = data.gameId;
    title.innerText = `New Game Started! ${currentPlayer}'s turn with Game ID: ${gameId}`;
    resetBoard();
    currentPlayer = player[Math.floor(Math.random()*2)];
    title.innerText = `New Game Started! ${currentPlayer}'s turn with Game ID: ${gameId}`;
  } catch (error) {
    console.error("Error starting new game:", error);
    resetBoard();
    currentPlayer = player[Math.floor(Math.random()*2)];
    title.innerText = "New Game (offline mode)";
  }
});

resetButton.addEventListener("click", async () => {
  try {
    const response = await fetch(`${apiUrl}/api/reset`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    console.log("Game reset response:", data); 
    xNum = data.xNum;
    oNum = data.oNum;
    xScore.innerText = `X : ${xNum}`;
    oScore.innerText = `O : ${oNum}`;
    title.innerText = `Tic Tac Toe ${data.message}  `;
  } catch (error) {
    console.error("Error resetting game:", error);
  }
  ;
  currentPlayer = player[Math.floor(Math.random()*2)];  
  resetBoard();
});



function resetBoard(){
  for (let i = 0; i < VarcantBox.length; i++) {
    VarcantBox[i] = "";
    document.getElementById(`box-${i + 1}`).innerText = "";
  }
}