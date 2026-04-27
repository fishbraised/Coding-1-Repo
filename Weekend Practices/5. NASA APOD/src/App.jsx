import axios from "axios";

import { useEffect, useRef, useState } from "react";

import { FaRegStar, FaStar } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

import "./App.css";

const App = () => {
  const getInitialDate = () => {
    const date = new Date();

    const YYYY = date.getFullYear();
    const MM = String(date.getMonth() + 1).padStart(2, "0");
    const DD = String(date.getDate()).padStart(2, "0");

    return `${YYYY}-${MM}-${DD}`;
  };

  const [APOD, setAPOD] = useState({});
  const [chosenDate, setChosenDate] = useState(getInitialDate());

  const dateInputRef = useRef(null);

  const handleCalendarClick = () => {
    if (dateInputRef.current?.showPicker) {
      dateInputRef.current.showPicker();
    } else {
      console.warn("showPicker is not supported in this browser.");
    }
  };

  const handleCalendarChange = (event) => {
    setChosenDate(event.target.value);
  };

  useEffect(() => {
    const fetchAPOD = async (chosenDate) => {
      try {
        const URL = `https://api.nasa.gov/planetary/apod?api_key=9EtulVlhR3QT5IPXNio9TG5ze3qlN645D69d8Lul&date=${chosenDate}`;
        const response = await axios.get(URL);

        setAPOD(response.data);
      } catch {
        setAPOD("ERROR");
      }
    };

    // https://api.nasa.gov/planetary/apod?api_key=9EtulVlhR3QT5IPXNio9TG5ze3qlN645D69d8Lul&date=2029-11-1

    fetchAPOD(chosenDate);
  }, [chosenDate]);

  const getDisplayDate = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date(chosenDate);

    const YYYY = date.getFullYear();
    const M = months[date.getMonth()];
    const DD = date.getDate() + 1;

    return `${M} ${DD}, ${YYYY}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-800 px-10 py-8">
      <header className="mb-7 flex items-center justify-between">
        <div className="flex items-center">
          <div className="mt-1 mr-4 rounded-full bg-blue-600 p-3">
            <FaRegStar className="size-5 text-white" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white">NASA APOD</h1>
            <p className="text-xs text-slate-300">
              Astronomy Picutre of the Day
            </p>
          </div>
        </div>

        <div
          className="flex cursor-pointer items-center rounded-lg border-1 border-white/20 bg-white/10 px-6 py-2 pr-0"
          onClick={handleCalendarClick}
        >
          <FiCalendar className="mr-2 size-4 cursor-pointer text-blue-300" />
          <input
            className="date-input w-25 cursor-pointer pb-0.5 text-center text-xs text-white outline-none select-none"
            type="date"
            ref={dateInputRef}
            onChange={handleCalendarChange}
            value={chosenDate}
          />
        </div>
      </header>

      <main className="flex gap-7">
        <aside className="h-fit w-[48%] overflow-hidden rounded-2xl border-1 border-white/20 bg-white/10">
          <img
            className="aspect-7/4 w-full object-cover"
            src={APOD.url}
            alt="img"
          />

          <p className="px-5 py-3 text-xs font-semibold text-slate-300">
            © Jeff Dai
          </p>
        </aside>

        <section className="w-[52%] overflow-hidden rounded-2xl border-1 border-white/20 bg-white/10 p-7">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <GoDotFill className="mr-1.5 text-xs text-blue-300" />
              <p className="text-xs font-semibold text-blue-300 uppercase">
                {getDisplayDate()}
              </p>
            </div>

            <div className="flex items-center">
              <FaStar className="mr-1.5 text-xs text-yellow-300" />
              <p className="text-xs font-semibold text-yellow-300 uppercase">
                Featured
              </p>
            </div>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-white">{APOD.title}</h2>
          <p className="text-base font-semibold text-slate-300">
            {APOD !== "ERROR"
              ? APOD.explanation
              : "ERROR: Outside of Allowed Timeframe"}
          </p>
        </section>
      </main>
    </div>
  );
};

export default App;
