const HEAD = () => (
  <div className="absolute top-11.5 left-72.75 h-17 w-17 rounded-full border-10 border-black" />
);

const BODY = () => (
  <div className="absolute top-28 left-80 h-28 w-2.5 bg-black" />
);

const RIGHT_ARM = () => (
  <div className="absolute top-37 left-82 h-2.5 w-28 origin-bottom-left -rotate-30 bg-black" />
);

const LEFT_ARM = () => (
  <div className="absolute top-37 left-52.5 h-2.5 w-28 origin-bottom-right rotate-30 bg-black" />
);

const RIGHT_LEG = () => (
  <div className="absolute top-78 left-68.75 h-2.5 w-28 origin-bottom-left -rotate-60 bg-black" />
);

const LEFT_LEG = () => (
  <div className="absolute top-78 left-65.75 h-2.5 w-28 origin-bottom-right rotate-60 bg-black" />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, numberOfGuesses).map((Part, index) => (
        <Part key={index} />
      ))}
      <div className="absolute left-80 h-12.5 w-2.5 bg-black" />
      <div className="ml-30 h-2.5 w-50 bg-black" />
      <div className="ml-30 h-100 w-2.5 bg-black" />
      <div className="h-2.5 w-62.5 bg-black" />
    </div>
  );
};

export default HangmanDrawing;
