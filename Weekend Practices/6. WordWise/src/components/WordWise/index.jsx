import gsap from "gsap";

import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import { TailSpin } from "react-loader-spinner";
import { HiOutlineBookOpen, HiOutlineSearch } from "react-icons/hi";

import React, { useEffect, useRef, useState } from "react";
import "./index.css";

const apiConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  loading: "LOADING",
};

const WordWise = () => {
  const [search, setSearch] = useState("");
  const [apiData, setApiData] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiConstants.initial);

  const failureRef = useRef(null);

  useEffect(() => {
    if (apiStatus === apiConstants.failure && failureRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          failureRef.current,
          { x: -10 },
          {
            x: 10,
            duration: 0.09,
            ease: "power1.inOut",
            repeat: 2,
            yoyo: true,
            onComplete: () => gsap.set(failureRef.current, { x: 0 }),
          },
        );
      });

      return () => ctx.revert();
    }
  }, [apiStatus]);

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const submitSearch = async (event) => {
    event.preventDefault();
    setApiStatus(apiConstants.loading);

    if (search.trim() === "") {
      setApiStatus(apiConstants.initial);
      return;
    }

    try {
      const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
      const response = await axios.get(URL);
      setApiData(response.data);
      setApiStatus(apiConstants.success);

      console.log("data: ", response.data);
    } catch {
      setApiStatus(apiConstants.failure);
    }
  };

  const renderView = () => {
    switch (apiStatus) {
      case apiConstants.success:
        return renderSuccessView();
      case apiConstants.failure:
        return renderFailureView();
      case apiConstants.loading:
        return renderLoadingView();
      default:
        return renderInitialView();
    }
  };

  const renderSuccessView = () => {
    return (
      <section className="rounded-3xl border-2 border-[#e5e7eb] bg-[#ffffff] px-8 py-12 shadow-xs">
        <div className="mb-8 flex items-center">
          <h2 className="flex items-center font-[lora] text-3xl font-bold text-[#1f2937] capitalize">
            {apiData[0].word}
          </h2>
          <p className="ml-1 text-sm text-[#6b7280]"> {apiData[0].phonetic}</p>
        </div>
        <hr className="border-[#e5e7eb]" />

        {apiData.map((eachObj) => {
          return (
            <div key={uuidv4()} className="mt-5">
              <h3 className="mb-2 font-[lora] text-xl font-semibold text-[#1f2937] capitalize">
                {eachObj.meanings[0].partOfSpeech}
              </h3>
              <p className="font-[inter] text-base text-[#374151]">
                {eachObj.meanings[0].definitions[0].definition}
              </p>
            </div>
          );
        })}
      </section>
    );
  };

  const renderFailureView = () => {
    return (
      <div
        id="failureSection"
        ref={failureRef}
        className="flex flex-col items-center rounded-3xl border-2 border-[#edd3d3] bg-[#fff1f1] p-8 shadow-xs"
      >
        <h2 className="mt-4 mb-4 font-[lora] text-2xl font-semibold text-[#9e2d2d] text-shadow-2xs">
          Word Not Found
        </h2>
        <p className="mb-3 font-[inter] text-base text-[#8a3a3a]">
          Sorry, we couldn't find a definition for the word.
        </p>
      </div>
    );

    // Sorry, we couldn't find a definition for <span>"{search}"</span>.
  };

  const renderLoadingView = () => {
    return (
      <section className="flex h-30 items-center justify-center">
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#4299e1"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </section>
    );
  };

  const renderInitialView = () => {
    return (
      <section className="flex flex-col items-center rounded-3xl border-2 border-[#e5e7eb] bg-[#ffffff] p-8 shadow-xs">
        <HiOutlineBookOpen className="mb-4 text-7xl text-[#d2d4d8]" />
        <h2 className="mb-3 font-[lora] text-2xl font-semibold text-[#1f2937] text-shadow-2xs">
          Let's learn something new!
        </h2>
        <p className="mb-3 font-[inter] text-base text-[#6b7280]">
          Type a word above and press Enter to start your search.
        </p>
      </section>
    );
  };

  return (
    <div className="flex min-h-screen justify-center bg-[#f9fafb] py-12">
      <div className="w-[55%]">
        <header className="mb-6 flex flex-col items-center">
          <div className="mb-6 flex items-center">
            <HiOutlineBookOpen className="mr-2 mb-1.5 text-3xl text-[#4299e1]" />
            <h1 className="font-[lora] text-4xl font-bold text-[#1f2937]">
              WordWise
            </h1>
          </div>
          <form
            className="flex w-full overflow-hidden rounded-full border-2 border-[#e5e7eb] shadow-xs duration-300 focus-within:border-[#4299e1]"
            onSubmit={submitSearch}
          >
            <input
              className="w-full bg-[#ffffff] px-4 py-2 font-semibold text-[inter] outline-none"
              onChange={updateSearch}
              type="text"
              placeholder="Search for a word..."
            />
            <button
              className="flex cursor-pointer items-center outline-none"
              type="submit"
            >
              <HiOutlineSearch className="w-12 text-xl text-[#4299e1]" />
            </button>
          </form>
        </header>

        <main>{renderView()}</main>
      </div>
    </div>
  );
};

export default WordWise;
