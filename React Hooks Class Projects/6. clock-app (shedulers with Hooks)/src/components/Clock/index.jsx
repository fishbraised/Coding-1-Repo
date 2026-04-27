import { ClockContainer, Heading, ClockImage, Time } from "./styledComponents";
import { useState, useEffect, use } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log("Effect is running...");

    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);

      console.log("Clean up function is executed.");
    };
  }, []);

  return (
    <ClockContainer>
      <Heading>Clock</Heading>
      <ClockImage
        src="https://assets.ccbp.in/frontend/hooks/clock-img.png"
        alt="clock"
      />
      <Time> {date.toLocaleTimeString()} </Time>
    </ClockContainer>
  );
};

export default Clock;
