const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

const Keyboard = ({
  disabled = false,
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) => {
  return (
    <div className="grid grid-cols-5 gap-2 self-center sm:grid-cols-6 md:w-[60%] md:grid-cols-7 lg:grid-cols-8">
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);

        return (
          <button
            className={`mt-4 aspect-square cursor-pointer border-3 border-black p-2 text-[2rem] font-bold text-black uppercase hover:not-disabled:bg-[hsl(200,100%,75%)] focus:not-disabled:bg-[hsl(200,100%,75%)] active:bg-[hsl(200,100%,50%)] active:text-white ${isActive && "bg-[hsl(200,100%,50%)] text-white"} ${isInactive && "disabled:opacity-[.3]"}`}
            disabled={isInactive || isActive || disabled}
            key={key}
            onClick={() => addGuessedLetter(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
