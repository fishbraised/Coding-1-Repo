import { GiTomato } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";

import { useEffect, useState, useRef } from "react";

import "./index.css";

const PomodoroFocusTracker = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isTimerRun, setTimerRun] = useState(false);
  const [seconds, setSeconds] = useState(1 * 5);
  const [focusSessions, setFocusSessions] = useState(0);

  const timerRef = useRef(null);

  const toggleModalOpen = () => {
    setModalOpen((prevState) => !prevState);
  };

  const toggleTimerRun = () => {
    setTimerRun((prevState) => !prevState);
  };

  const resetTimer = () => {
    setTimerRun(false);
    setSeconds(25 * 60);
  };

  const resetFocusSessions = () => {
    setFocusSessions(0);
  };

  useEffect(() => {
    if (!isTimerRun || seconds === 0) {
      clearInterval(timerRef.current);
    } else {
      timerRef.current = setInterval(() => {
        setSeconds((prevState) => prevState - 1);
      }, 1000);
    }
  }, [isTimerRun]);

  useEffect(() => {
    if (seconds === 0) {
      resetTimer();
      setFocusSessions((prevState) => prevState + 1);

      if (Notification.permission === "granted") {
        new Notification("🎉 Time’s up!", {
          body: "You’ve completed a Pomodoro session.",
        });
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification("🎉 Time’s up!", {
              body: "You’ve completed a Pomodoro session.",
            });
          }
        });
      }
    }
  }, [seconds]);

  const formatTimeRemaining = () => {
    const minutesRemaining = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;

    const MM = String(minutesRemaining).padStart(2, "0");
    const SS = String(secondsRemaining).padStart(2, "0");

    return `${MM}:${SS}`;
  };

  return (
    <main className="relative flex justify-center items-center min-h-screen bg-[var(--monochrome-1-color)]">
      {isModalOpen && (
        <div className="absolute top-[50%] left-[50%] translate-[-50%] flex justify-center items-center w-screen h-screen bg-black">
          <div className="flex flex-col items-center w-[55%] h-[90%] px-12 py-6 border-1 border-[var(--monochrome-3-color)] rounded-2xl bg-[var(--monochrome-2-color)] overflow-y-auto">
            <div className="flex items-center mb-4 text-[var(--primary-color)] text-3xl font-semibold">
              <GiTomato className="mr-2" />
              <h2 className="mr-4">What is the Pomodoro Technique?</h2>
              <FaXmark
                className="text-[var(--monochrome-4-color)] text-xl cursor-pointer"
                onClick={toggleModalOpen}
              />
            </div>

            <hr className="w-full mb-6 border-1 border-[var(--monochrome-3-color)]" />

            <p className="mb-6 text-[var(--monochrome-4-color)]">
              Developed by Francesco Cirillo in the late 1980s, the Pomodoro
              Technique is a time management method that can help you stay
              focused and productive.
            </p>

            <h3 className="self-start text-[var(--primary-color)] text-xl font-semibold">
              How it works:
            </h3>
            <ol className="list-none w-full pl-4">
              <li className="flex items-center mt-4">
                <div className="flex justify-center items-center w-8 h-8 pb-1 mr-2 text-base font-semibold bg-[var(--primary-color)] rounded-full">
                  1
                </div>

                <div>
                  <h4 className="text-[var(--monochrome-5-color)] text-base font-semibold">
                    Choose a task
                  </h4>
                  <p className="text-[var(--monochrome-4-color)] text-base">
                    Pick something you want to work on
                  </p>
                </div>
              </li>
              <li className="flex items-center mt-4">
                <div className="flex justify-center items-center w-8 h-8 pb-1 mr-2 text-base font-semibold bg-[var(--primary-color)] rounded-full">
                  2
                </div>

                <div>
                  <h4 className="text-[var(--monochrome-5-color)] text-base font-semibold">
                    Set timer for 25 minutes
                  </h4>
                  <p className="text-[var(--monochrome-4-color)] text-base">
                    Work with complete focus - no distractions!
                  </p>
                </div>
              </li>
              <li className="flex items-center mt-4">
                <div className="flex justify-center items-center w-8 h-8 pb-1 mr-2 text-base font-semibold bg-[var(--primary-color)] rounded-full">
                  3
                </div>

                <div>
                  <h4 className="text-[var(--monochrome-5-color)] text-base font-semibold">
                    Take a 5-minute break
                  </h4>
                  <p className="text-[var(--monochrome-4-color)] text-base">
                    Stretch, breathe, or grab some water
                  </p>
                </div>
              </li>
              <li className="flex items-center mt-4">
                <div className="flex justify-center items-center w-8 h-8 pb-1 mr-2 text-base font-semibold bg-[var(--primary-color)] rounded-full">
                  4
                </div>

                <div>
                  <h4 className="text-[var(--monochrome-5-color)] text-base font-semibold">
                    Repeat the cycle
                  </h4>
                  <p className="text-[var(--monochrome-4-color)] text-base">
                    After 4 sessions, take a longer 15-30 minute break
                  </p>
                </div>
              </li>
            </ol>

            <hr className="w-full mt-7 mb-7 border-1 border-[var(--monochrome-3-color)]" />

            <h3 className="self-start text-[var(--primary-color)] text-xl font-semibold">
              Why it works:
            </h3>
            <ul className="list-none w-full pl-4">
              <li className="flex items-center mt-4">
                <p className="text-[var(--monochrome-4-color)] text-base">
                  🧠 Improves focus and concentration
                </p>
              </li>
              <li className="flex items-center mt-4">
                <p className="text-[var(--monochrome-4-color)] text-base">
                  ⚡Reduces mental fatigue
                </p>
              </li>
              <li className="flex items-center mt-4">
                <p className="text-[var(--monochrome-4-color)] text-base">
                  📈 Increases productivity
                </p>
              </li>
              <li className="flex items-center mt-4">
                <p className="text-[var(--monochrome-4-color)] text-base">
                  🎯 Helps overcome procrastination
                </p>
              </li>
              <li className="flex items-center mt-4">
                <p className="text-[var(--monochrome-4-color)] text-base">
                  ⏰ Better time awareness
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center px-12 py-6 border-1 border-[var(--monochrome-3-color)] rounded-2xl bg-[var(--monochrome-2-color)]">
        <button
          className="self-end w-8 h-8 mb-2 border-2 border-[var(--primary-color)] rounded-full text-[var(--primary-color)] text-xl cursor-pointer"
          onClick={toggleModalOpen}
        >
          ?
        </button>

        <div className="flex items-center mb-1 text-[var(--primary-color)] text-4xl font-semibold">
          <GiTomato className="mr-2" /> <h1>Focus Tracker</h1>
        </div>
        <p className="mb-4 text-[var(--monochrome-4-color)] text-base">
          Stay focused, stay productive
        </p>

        <p className="mb-8 text-[var(--primary-color)] text-6xl font-semibold">
          {formatTimeRemaining()}
        </p>

        <div>
          {isTimerRun ? (
            <button
              className="px-6 py-2 mr-4 border-2 border-[var(--monochrome-3-color)] rounded-lg text-[var(--monochrome-5-color)] text-base font-semibold cursor-pointer"
              onClick={toggleTimerRun}
            >
              PAUSE
            </button>
          ) : (
            <button
              className="px-6 py-2 mr-4 border-0 border-[var(--monochrome-3-color)] rounded-lg text-[var(--monochrome-1-color)] bg-[var(--primary-color)] text-base font-semibold cursor-pointer"
              onClick={toggleTimerRun}
            >
              START
            </button>
          )}

          <button
            className="px-6 py-2 mb-8 border-2 border-[var(--monochrome-3-color)] rounded-lg text-[var(--monochrome-5-color)] text-base font-semibold cursor-pointer"
            onClick={resetTimer}
          >
            RESET
          </button>
        </div>

        <hr className="w-full mb-6 border-1 border-[var(--monochrome-3-color)]" />

        <p className="mb-2 text-[var(--primary-color)] text-5xl font-semibold">
          {focusSessions}
        </p>
        <p className="mb-6 text-[var(--monochrome-4-color)] text-base)]">
          You've completed {focusSessions} focus sessions today.
        </p>
        <button
          className="px-6 py-2 rounded-xl text-[var(--monochrome-5-color)] bg-[var(--secondary-color)] text-base font-semibold cursor-pointer"
          onClick={resetFocusSessions}
        >
          RESET DAY
        </button>
      </div>
    </main>
  );
};

export default PomodoroFocusTracker;
