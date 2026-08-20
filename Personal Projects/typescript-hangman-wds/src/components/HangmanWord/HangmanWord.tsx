type HangmanWordProps = {
  reveal?: boolean;
  guessedLetters: string[];
  wordToGuess: string;
};

const HangmanWord = ({
  reveal = false,
  guessedLetters,
  wordToGuess,
}: HangmanWordProps) => {
  return (
    <div className="flex flex-wrap gap-x-[.25em] font-mono text-[6rem] font-bold uppercase">
      {wordToGuess.split("").map((letter, index) => (
        <span className="border-b-[.1em] border-black" key={index}>
          <span
            className={`${guessedLetters.includes(letter) || reveal ? "visible" : "invisible"} ${!guessedLetters.includes(letter) && reveal ? "text-red-500" : "text-black"}`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
