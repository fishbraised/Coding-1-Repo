import "./index.css";

import { useEffect, useState } from "react";

const mappedMatchups = {
  rock: {
    rock: "draw",
    paper: "loss",
    scissors: "win",
  },
  paper: {
    rock: "win",
    paper: "draw",
    scissors: "loss",
  },
  scissors: {
    rock: "loss",
    paper: "win",
    scissors: "draw",
  },
};

const choices = ["rock", "paper", "scissors"];

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState("");
  const [botChoice, setBotChoice] = useState("");

  const [userScore, setUserScore] = useState(0);
  const [botScore, setBotScore] = useState(0);
  const [isGameover, setIsGameover] = useState(false);

  useEffect(() => {
    if (userScore === 5 || botScore === 5) {
      setIsGameover(true);
    }
  }, [botScore, userScore]);

  const evaluateUserMatchup = (event) => {
    console.log("userScore: ", userScore);
    console.log("botScore: ", botScore);

    const botChoice = choices[Math.floor(Math.random() * 3)];
    const userChoice = event.target.value;

    setBotChoice(botChoice);
    setUserChoice(userChoice);

    console.log("botChoice: ", botChoice);
    console.log("userChoice: ", userChoice);

    const result = mappedMatchups[userChoice][botChoice];

    console.log("result: ", result);

    if (result === "loss") {
      setBotScore((prevState) => prevState + 1);
    } else if (result === "win") {
      setUserScore((prevState) => prevState + 1);
    }
  };

  const onClickPlayAgain = () => {
    setIsGameover(false);
    setUserScore(0);
    setBotScore(0);
  };

  const renderGameplay = () => {
    return (
      <>
        {/* Gameplay Screen */}
        <div className="flex flex-col items-center w-[90%] md:w-[70%] lg:w-[50%] p-6 border-1 border-[var(--light-bluish-gray)] rounded-xl bg-[var(--dark-bluish-gray)]">
          <h1 className="mb-2 text-center text-[var(--stark-white)] text-5xl font-extrabold">
            Rock Paper Scissors
          </h1>
          <p className="mb-6 text-[var(--light-bluish-gray)] text-md font-semibold">
            First to 5 points wins the game!
          </p>

          {/* Scoreboard */}
          <section className="flex gap-x-10 md:gap-x-15 lg:gap-x-20 px-14 md:px-18 lg:px-22 py-2 mb-8 border-1 border-[var(--light-bluish-gray)] rounded-md bg-[var(--dark-bluish-black)]">
            <div className="text-center">
              <p className="text-[var(--stark-blue)] text-3xl font-semibold">
                {userScore}
              </p>
              <p className="text-[var(--stark-white)] text-xl font-semibold">
                YOU
              </p>
            </div>

            <div>
              <p className="text-[var(--light-bluish-gray)] text-5xl font-semibold">
                :
              </p>
            </div>

            <div className="text-center">
              <p className="text-[var(--stark-orange)] text-3xl font-semibold">
                {botScore}
              </p>
              <p className="text-[var(--stark-white)] text-xl font-semibold">
                CPU
              </p>
            </div>
          </section>

          {/* Displayed Moves */}
          <section className="flex items-center gap-x-8 mb-14">
            <p className="text-[var(--stark-white)] text-6xl font-semibold">
              {userChoice === "rock"
                ? "✊"
                : userChoice === "paper"
                ? "✋"
                : userChoice === "scissors"
                ? "✌️"
                : "?"}
            </p>
            <p className="text-[var(--light-bluish-gray)] text-xl font-semibold"></p>
            <p className="text-[var(--light-bluish-gray)] text-xl font-semibold">
              VS
            </p>
            <p className="text-[var(--stark-white)] text-6xl font-semibold">
              {botChoice === "rock"
                ? "✊"
                : botChoice === "paper"
                ? "✋"
                : botChoice === "scissors"
                ? "✌️"
                : "?"}
            </p>
          </section>

          {/* Choice Buttons */}
          <p className="mb-4 text-[var(--light-bluish-gray)] text-md font-semibold">
            Choose a move
          </p>
          <div className="flex items-center gap-x-1">
            <button
              className="size-22 border-2 border-[var(--dark-bluish-gray)] rounded-full bg-[var(--light-bluish-gray)] text-5xl cursor-pointer"
              onClick={evaluateUserMatchup}
              value="rock"
            >
              ✊
            </button>
            <button
              className="size-22 border-2 border-[var(--dark-bluish-gray)] rounded-full bg-[var(--light-bluish-gray)] text-5xl cursor-pointer"
              onClick={evaluateUserMatchup}
              value="paper"
            >
              ✋
            </button>
            <button
              className="size-22 border-2 border-[var(--dark-bluish-gray)] rounded-full bg-[var(--light-bluish-gray)] text-5xl cursor-pointer"
              onClick={evaluateUserMatchup}
              value="scissors"
            >
              ✌️
            </button>
          </div>
        </div>
      </>
    );
  };

  const renderGameover = () => {
    return (
      <>
        {/* Gameover Screen */}
        <div className="absolute inset-0 min-h-screen bg-black opacity-[50%]"></div>
        <div className="absolute top-[50%] left-[50%] translate-[-50%] flex flex-col justify-center items-center px-8 py-10 border-1 border-[var(--light-bluish-gray)] rounded-xl bg-[var(--dark-bluish-gray)]">
          <h2 className="mb-3 text-[var(--stark-white)] text-3xl font-bold">
            {userScore >= 4 && botScore < 4
              ? "😆 You Won 😆"
              : "😭 You Lost 😭"}
          </h2>
          <p className="mb-6 text-[var(--light-bluish-gray)] text-base">
            {userScore >= 4 && botScore < 4
              ? "You won this time. Well played in this game!"
              : "The computer won this time. Better luck next game!"}
          </p>
          <button
            className="px-4 py-2 rounded text-[var(--stark-white)] text-sm bg-[var(--stark-blue)] font-bold cursor-pointer"
            onClick={onClickPlayAgain}
          >
            Play Again
          </button>
        </div>
      </>
    );
  };

  return (
    <main className="relative flex justify-center items-center min-h-screen p-4 bg-[var(--dark-bluish-black)]">
      {isGameover && renderGameover()}
      {renderGameplay()}
    </main>
  );
};

export default RockPaperScissors;
