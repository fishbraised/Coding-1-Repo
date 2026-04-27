import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

import React, { useRef, useState } from "react";
import "./index.css";

const wordArr = [
  {
    scrambled: "ndlib",
    correct: "blind",
    hint: "A lack or absence of a sense.",
  },
  {
    scrambled: "paphy",
    correct: "happy",
    hint: "A positive emotion.",
  },
  {
    scrambled: "daoeb",
    correct: "abode",
    hint: "A place of residence.",
  },
  {
    scrambled: "poerk",
    correct: "poker",
    hint: "A card game often found in casinos.",
  },
  {
    scrambled: "krsto",
    correct: "stork",
    hint: "A white avian.",
  },
];

const ScrambleWordGame = () => {
  const [activeWord, setActiveWord] = useState(
    wordArr[Math.floor(Math.random() * wordArr.length)],
  );

  const [guess, setGuess] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [isHintRequested, setIsHintRequested] = useState(false);

  const onUpdateGuess = (e) => {
    setGuess(e.target.value);
  };

  const scrambledContainer = useRef(null);

  useGSAP(
    () => {
      let tween = gsap.fromTo(
        scrambledContainer.current,
        { x: -8 },
        {
          x: 8,
          duration: 0.08,
          repeat: 3,
          yoyo: true,
          ease: "bounce",
          onComplete: () => {
            gsap.set(scrambledContainer.current, { clearProps: "x" });
          },
        },
      );

      return () => {
        tween.kill();
      };
    },
    { dependencies: [isCorrect], scope: scrambledContainer },
  );

  const onCheckAnswer = (e) => {
    e.preventDefault();

    if (guess.toLowerCase() === activeWord.correct) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const onToggleHint = () => {
    setIsHintRequested((prev) => !prev);
  };

  const onRequestNewWord = () => {
    setActiveWord(wordArr[Math.floor(Math.random() * wordArr.length)]);
    setGuess("");
    setIsCorrect(null);
    setIsHintRequested(false);
  };

  return (
    <main className="flex h-screen items-center justify-center bg-[url('https://res.cloudinary.com/dkoqbt4pc/image/upload/v1760195579/Backgrounds/dark-calm-bg.jpg')] bg-cover bg-center p-8">
      <div className="flex min-w-[35%] flex-col items-center justify-center rounded-xl border-1 border-gray-700 bg-gray-900 px-13 py-9 tracking-wider shadow-xs shadow-gray-600">
        <h1 className="mb-2 text-center font-[Roboto] text-4xl font-bold text-white">
          Scramble Savvy
        </h1>
        <p className="mb-8 text-center font-[Roboto] text-base text-gray-200">
          Unscramble the word below!
        </p>

        <div
          className="mb-6 flex w-[100%] justify-center rounded-lg bg-gray-800 px-8 pt-2 pb-4"
          ref={scrambledContainer}
        >
          <p className="font-sans text-5xl font-bold tracking-[15px] text-blue-300 uppercase text-shadow-blue-400 text-shadow-sm">
            {activeWord.scrambled}
          </p>
        </div>

        <form
          className="mb-8 flex w-[100%] justify-between"
          onSubmit={onCheckAnswer}
        >
          <input
            className="w-[67%] rounded-md bg-gray-700 px-7 py-3 font-[Roboto] text-base text-gray-200 outline-blue-400"
            type="text"
            placeholder="Your guess..."
            onChange={onUpdateGuess}
            value={guess}
          />
          <button
            className="w-[27%] cursor-pointer rounded-md bg-blue-400 px-4 py-3 font-[Roboto] text-base font-bold text-white shadow-xs shadow-blue-400"
            type="submit"
          >
            Check
          </button>
        </form>

        {isCorrect !== null &&
          (isCorrect ? (
            <p className="mb-4 text-center font-[Roboto] text-base text-yellow-300">
              🎉 Correct! Well done!
            </p>
          ) : (
            <p className="mb-4 text-center font-[Roboto] text-base text-yellow-300">
              🤔 Not quite, try again!
            </p>
          ))}

        {isHintRequested && (
          <div className="mb-8 rounded-md bg-gray-800 px-8 pt-2 pb-3">
            <p className="text-center font-sans text-gray-200 italic">
              💡 {activeWord.hint}
            </p>
          </div>
        )}

        <div className="flex w-[100%] justify-between">
          <button
            className="w-[47%] cursor-pointer rounded-md bg-orange-400 px-3 py-2 font-[Roboto] text-base font-bold text-white shadow-xs shadow-orange-400"
            onClick={onToggleHint}
          >
            💡 Hint
          </button>
          <button
            className="w-[47%] cursor-pointer rounded-md bg-orange-400 px-3 py-2 font-[Roboto] text-base font-bold text-white shadow-xs shadow-orange-400"
            onClick={onRequestNewWord}
          >
            🔄️ New Word
          </button>
        </div>
      </div>
    </main>
  );
};

export default ScrambleWordGame;
