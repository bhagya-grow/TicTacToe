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
let xNum = 0;
let oNum = 0;

function checkWin(VarcantBox) {
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (
      VarcantBox[a] &&
      VarcantBox[b] === VarcantBox[a] &&
      VarcantBox[c] === VarcantBox[a]
    ) {
      if (VarcantBox[a] === "X") {
        xNum += 1;
      } else {
        oNum += 1;
      }
      return [VarcantBox[a], xNum, oNum];
    }
  }
  return null;
}

export { checkWin };
