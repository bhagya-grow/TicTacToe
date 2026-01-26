const box = document.querySelectorAll(".box");
const resetButton = document.querySelector(".reset-game");
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
  box.addEventListener("click", () => {
    if (VarcantBox[parseInt(box.id.split("-")[1]) - 1] !== "") {
      title.innerText="Box is already occupied";
      return;
    }
    title.innerText = "Tic Tac Toe";
    console.log(box.id);
    var boxContent = document.getElementById(box.id);
    currentPlace = whoseTurn();
    boxContent.innerText = currentPlace;
    VarcantBox[parseInt(box.id.split("-")[1]) - 1] = currentPlace;
    checkWin();
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

function checkWin() {
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (
      VarcantBox[a] &&
      VarcantBox[b] === VarcantBox[a] &&
      VarcantBox[c] === VarcantBox[a]
    ) {
      //   alert(`${VarcantBox[a]} has won the game`);
      title.innerText = `${VarcantBox[a]} has won the game`;
      if(VarcantBox[a]==="X"){
        xNum+=1;
        xScore.innerText=`X : ${xNum}`;
      }else{
        oNum+=1;
        oScore.innerText=`O : ${oNum}`;
      }
      return;
    }
  }
}

resetButton.addEventListener("click", () => {
  title.innerText = "Tic Tac Toe";
  for (let i = 0; i < VarcantBox.length; i++) {
    VarcantBox[i] = "";
    document.getElementById(`box-${i + 1}`).innerText = "";
  }
});
