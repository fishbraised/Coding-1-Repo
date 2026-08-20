import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

const getWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

const App = () => {
  const [wordToGuess, setWordToGuess] = useState<string>(() => getWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter),
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isWinner || isLoser) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser],
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <>
      <div className="text-center text-[2rem]">
        {isWinner && "Winner! - Refresh to try again"}
        {isLoser && "Nice Try - Refresh to try again"}
      </div>
      <div className="-mt-18 flex min-h-screen w-screen flex-col items-center gap-x-5 md:flex-row md:items-stretch lg:px-15">
        <div className="flex scale-70 flex-col md:w-[40%]">
          <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
          <HangmanWord
            reveal={isLoser}
            guessedLetters={guessedLetters}
            wordToGuess={wordToGuess}
          />
        </div>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter),
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </>
  );
};

export default App;

// Put HangmanDrawing and Keyboard side by side.
