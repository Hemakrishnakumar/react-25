import React, { useEffect, useState } from "react";
import styles from "./Game.module.css";

function checkWinner(squares) {
  const winningComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningComb.length; i++) {
    const [x, y, z] = winningComb[i];
    if (squares[x] && squares[x] === squares[y] && squares[y] === squares[z])
      return squares[x];
  }
  return null;
}

const Game = () => {
  const [curPlayer, setCurPlayer] = useState("X");
  const [gameArr, setGameArr] = useState(Array(9).fill(""));
  const [status, setStatus] = useState("Next Player is X");

  useEffect(() => {
    const isGameWon = checkWinner(gameArr);
    if (isGameWon) setStatus(isGameWon + " is the winner💐.");
    else if (gameArr.some((item) => item === "")) {
      setStatus("Next Player is " + curPlayer);
    } else setStatus("This game is a draw. Please restart the game");
  }, [gameArr, curPlayer]);

  function clickHandler(id) {
    // return when a square is already clicked or game is won
    if (gameArr[id] || status.includes("winner")) return;
    const arr = [...gameArr];
    arr[id] = curPlayer;
    setCurPlayer(curPlayer === "X" ? "O" : "X");
    setGameArr(arr);
  }

  function resetHandler() {
    setGameArr(Array(9).fill(""));
    setCurPlayer("X");
    setStatus("Next Player is X");
  }
  return (
    <div className={styles.game}>
      <div className={styles.board}>
        {[...new Array(9)].map((_, i) => (
          <Box key={i} onClick={() => clickHandler(i)} text={gameArr[i]} />
        ))}
      </div>
      <h2>{status}</h2>
      <button className={styles.btn} onClick={resetHandler}>
        Restart
      </button>
    </div>
  );
};

function Box({ onClick, text }) {
  return (
    <button
      style={{ color: text === "X" ? "green" : "blue" }}
      onClick={onClick}
      className={styles.box}
    >
      {text}
    </button>
  );
}
export default Game;
