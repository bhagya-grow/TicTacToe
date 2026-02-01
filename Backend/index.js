//Tic tac toe backend server setup api
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { checkWin } from "./GameFuntion.js";

const app = express();
const GameNumber = [{ gameId: 1,status: "active" }, { gameId: 2, status: "active" }];

const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Tic Tac Toe Backend Server is running");
});

//Create new game
app.post("/api/new", (req, res) => {
//   console.log("POST /api/new - Creating new game");

  const newGameId = GameNumber.length + 1;
  GameNumber.push({ gameId: newGameId, status: "active" });

//   console.log(`New game created with ID: ${newGameId}`);
//   console.log("Current games:", GameNumber);

  res.json({ gameId: newGameId });
});

app.post("/api/reset", (req, res) => {
    // console.log("POST /api/reset - Resetting game state");
    res.json({ message: "Game reset successful",xNum:0,oNum:0 });
});

//Check win condition
app.post("/api/win", (req, res) => {
  const obj = req.body;
  const gameId = obj.gameId;
  const result = checkWin(obj.varcantBox);

  if (result) {
    const index = GameNumber.findIndex((game) => game.gameId === gameId);
    if (index !== -1) {
      GameNumber[index].status = "finished";
    }
  //   console.log(result);
  }

  res.json({ winner: result });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
