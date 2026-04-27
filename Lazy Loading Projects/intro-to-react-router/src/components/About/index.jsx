import { useEffect, useState } from "react";
import "./index.css";

const About = () => {
  const [text, setText] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setText("I love to create! I am a front-end web developer");
    }, 1000);
  });

  return (
    <div className="about-container">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1076/1076337.png"
        alt="about"
        className="about-img"
      />
      <h1 className="about-heading">About</h1>
      {text ? (
        <p className="about-paragraph">{text}</p>
      ) : (
        <p>Loading About...</p>
      )}
    </div>
  );
};

export default About;
