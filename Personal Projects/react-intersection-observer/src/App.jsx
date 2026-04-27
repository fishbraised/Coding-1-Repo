import { useInView } from "react-intersection-observer";

import React from "react";
import "./App.css";

const App = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  return (
    <main className="main-container">
      <div className="box">
        <p>TEXT</p>
      </div>
      <div className={`box ${inView ? "animateLightenPage" : ""}`} ref={ref}>
        <p>TEXT</p>
      </div>
      <div className="box">
        <p>TEXT</p>
      </div>
    </main>
  );
};

export default App;
