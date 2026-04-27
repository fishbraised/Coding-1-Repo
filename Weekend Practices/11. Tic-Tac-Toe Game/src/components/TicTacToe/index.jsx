import { useEffect, useState } from "react";
import circle_icon from "../../assets/circle.png";
import cross_icon from "../../assets/cross.png";

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [winner, setWinner] = useState("");

  const toggle = (num) => {
    if (lock || board[num]) {
      return 0;
    }

    setBoard((prev) => {
      const newBoard = [...prev];
      newBoard[num] = count % 2 === 0 ? "x" : "o";
      return newBoard;
    });
    setCount((prev) => prev + 1);
  };

  const checkWin = () => {
    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];

      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setLock(true);
        if (board[a] === "x") {
          setWinner("x");
        } else {
          setWinner("o");
        }
        break;
      }
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setCount(0);
    setLock(false);
    setWinner("");
  };

  useEffect(() => {
    checkWin();
  }, [count]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {/* Title */}
      <h1 className="mt-4 text-center text-[40px] font-semibold tracking-tight text-white">
        {winner === "" ? (
          <>
            Tic Tac Toe Game In
            <span className="pl-2.5 text-[#26ffcb]">React</span>
          </>
        ) : (
          <div className="flex items-center">
            The winner is
            <img
              className="mt-3 ml-3 size-9"
              src={winner === "x" ? cross_icon : circle_icon}
              alt={winner === "x" ? "cross_icon" : "circle_icon"}
            />
          </div>
        )}
      </h1>
      {/* Board */}
      <div className="mt-6 grid size-90 grid-cols-3 select-none">
        {board.map((cell, index) => (
          <div
            key={index}
            className="flex size-30 cursor-pointer items-center justify-center rounded-xl border-4 border-solid border-[#0f1b21] bg-[#1f3540] p-8"
            onClick={() => toggle(index)}
          >
            {cell === "x" && <img src={cross_icon} alt="cross_icon" />}
            {cell === "o" && <img src={circle_icon} alt="circle_icon" />}
          </div>
        ))}
      </div>
      {/* Reset*/}
      <button
        className="mt-6 mb-10 h-12 w-36 cursor-pointer rounded-[50px] border-none bg-[#1f3540] text-[18px] text-[#26ffcb] transition-colors duration-300 ease-in-out outline-none select-none hover:bg-[#2e3d45]"
        onClick={resetGame}
      >
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
