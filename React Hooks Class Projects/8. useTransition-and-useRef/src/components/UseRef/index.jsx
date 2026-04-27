import React, { useRef, useState } from "react";

const UseRef = () => {
  const [text, setText] = useState("");

  const refEl = useRef();

  const updateText = (e) => {
    setText(e.target.value);

    refEl.current.style.backgroundColor = "yellow";
  };

  const clearText = () => {
    setText("");
    console.log(refEl);

    refEl.current.focus();

    // let inputEl = document.getElementById("input");
    // inputEl.focus();
  };

  return (
    <main>
      <h1>UseRef Demo</h1>

      <input ref={refEl} onChange={updateText} value={text} type="text" />
      <button onClick={clearText}>Clear Button</button>
    </main>
  );
};

export default UseRef;
