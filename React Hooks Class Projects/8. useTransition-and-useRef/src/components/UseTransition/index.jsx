import React, { useState, useTransition } from "react";

const UseTransition = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const [isPending, startTransition] = useTransition();

  const listSize = 12000;
  const newList = [];

  const updateText = (e) => {
    setText(e.target.value);

    startTransition(() => {
      for (let i = 0; i < listSize; i++) {
        newList.push(e.target.value);
      }

      setList(newList);
    });
  };

  return (
    <main>
      <h1>UseTransition Demo</h1>

      <input
        onChange={updateText}
        value={text}
        type="text"
        placeholder="Enter text..."
      />
      {isPending ? (
        <p>Loading...</p>
      ) : (
        list.map((eachText) => <p>{eachText}</p>)
      )}
    </main>
  );
};

export default UseTransition;
