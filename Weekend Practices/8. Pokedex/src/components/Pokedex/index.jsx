import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CSSPlugin } from "gsap/CSSPlugin";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(CSSPlugin);

import { useDispatch, useSelector } from "react-redux";
import { pokedexReducers } from "../../store/pokedexReducers";
import { fetchPokedexData } from "../../store/pokedexSlice";

import { TailSpin } from "react-loader-spinner";

import React, { useEffect, useReducer, useRef } from "react";
import "./index.css";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "LOADING",
};

const pokemonTypeColors = {
  normal: "#aaaa99",
  fire: "#ff4422",
  water: "#3399ff",
  electric: "#ffcc33",
  grass: "#77cc55",
  ice: "#66ccff",
  fighting: "#bb5544",
  poison: "#aa5599",
  ground: "#ddbb55",
  flying: "#8899ff",
  psychic: "#ff5599",
  bug: "#aabb22",
  rock: "#bbaa66",
  ghost: "#6666bb",
  dragon: "#7766ee",
  dark: "#775544",
  steel: "#aaaabb",
  fairy: "#ee99ee",
};

const Pokedex = () => {
  const pokedexData = useSelector((state) => state.pokedex);
  const [pokedexReducer, pokedexReducerDispatch] = useReducer(pokedexReducers, {
    searchInput: "",
  });

  const greenStatBars = useRef([]);

  useGSAP(() => {
    if (pokedexData.apiStatus === apiStatusConstants.success) {
      // animate each green stat bar from width 0 to its CSS width
      greenStatBars.current.forEach((el) => {
        if (el) {
          gsap.from(el, {
            width: 0,
            duration: 1.2,
            ease: "power2.out",
          });
        }
      });
    }
  }, [pokedexData.apiStatus]);

  const pokedexDataDispatch = useDispatch();

  const updateSearchInput = (event) => {
    pokedexReducerDispatch({
      type: "UPDATESEARCHINPUT",
      payload: event.target.value,
    });
  };

  const searchPokedexData = (event) => {
    event.preventDefault();

    pokedexDataDispatch(fetchPokedexData(pokedexReducer.searchInput));
  };

  const getPokemonTypeColors = (type) => pokemonTypeColors[type];

  const renderView = () => {
    switch (pokedexData.apiStatus) {
      case apiStatusConstants.initial:
        return renderInitialView();
      case apiStatusConstants.success:
        return renderSuccessView();
      case apiStatusConstants.failure:
        return renderFailureView();
      case apiStatusConstants.inProgress:
        return renderLoadingView();
    }
  };

  const renderInitialView = () => {
    return (
      <>
        <h1 className="text-lg font-bold text-gray-700">Welcome!</h1>
        <p className="text-base text-gray-500">
          Search for a pokemon to begin.
        </p>
      </>
    );
  };

  const renderSuccessView = () => {
    console.log("pokedexData: ", pokedexData);

    return (
      <>
        <img
          className="size-32"
          src={pokedexData.data.sprites.front_default}
          alt="Image of a Pokemon."
        />
        <h1 className="font-[roboto] text-2xl font-bold text-gray-950 capitalize">
          {pokedexData.data.name}
        </h1>
        <p className="mb-2 font-[roboto] text-base text-gray-600">#025</p>

        <div className="mb-6 flex items-center gap-x-2">
          {pokedexData.data.types.map((eachObj) => {
            return (
              <span
                style={{
                  backgroundColor: getPokemonTypeColors(eachObj.type.name),
                }}
                className={`rounded-sm px-2 py-0.75 font-[roboto] text-sm font-bold text-white capitalize text-shadow-xs`}
                key={eachObj.type.name}
              >
                {eachObj.type.name}
              </span>
            );
          })}
        </div>

        <ul className="list-none space-y-0.5 p-0">
          {pokedexData.data.stats.map((eachObj, index) => {
            return (
              <li
                className="flex w-62.5 items-center justify-between"
                key={eachObj.stat.name}
              >
                <h2 className="pb-0.5 text-xs font-semibold text-gray-500 capitalize">
                  {eachObj.stat.name}
                </h2>
                <div className="h-3.5 w-37.5 rounded-full bg-gray-300">
                  <div
                    style={{
                      minWidth: "25px",
                      width: `${(eachObj.base_stat / 255) * 100}%`,
                    }}
                    className={`flex h-3.5 items-center justify-end rounded-full bg-green-500 pr-1.5 pb-0.5`}
                    ref={(el) => (greenStatBars.current[index] = el)}
                  >
                    <p className="text-xs text-white">{eachObj.base_stat}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  };

  const renderFailureView = () => {
    return (
      <>
        <h1 className="text-base font-bold text-red-600">
          Uh oh! Pokémon not found.
        </h1>
        <p className="text-sm text-red-500">Try a different name or number.</p>
      </>
    );
  };

  const renderLoadingView = () => {
    return (
      <>
        <TailSpin
          visible={true}
          height="60"
          width="60"
          color="#6a7282"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </>
    );
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="rounded-lg border-3 border-red-800 bg-red-600 p-4">
        <div className="mb-4 flex items-center gap-x-3">
          <div className="mr-3 size-12 rounded-full border-4 border-blue-400 bg-blue-300 outline-4 outline-white"></div>
          <div className="size-5 rounded-full bg-red-400 outline-2 outline-white"></div>
          <div className="size-5 rounded-full bg-yellow-400 outline-2 outline-white"></div>
          <div className="size-5 rounded-full bg-green-400 outline-2 outline-white"></div>
        </div>

        <hr className="mb-4 border-1 border-red-800" />

        <div className="mb-6 w-80 rounded-lg bg-gray-700 p-1">
          <div className="rounded-md bg-gray-800 p-3">
            <div className="flex min-h-67.5 flex-col items-center justify-center rounded-sm bg-gray-200 p-4">
              {renderView()}
            </div>
          </div>
        </div>

        <form onSubmit={searchPokedexData}>
          <input
            className="mb-2 w-full rounded-sm border-3 border-red-800 bg-green-200 p-2 text-center text-gray-900 outline-none"
            onChange={updateSearchInput}
            value={pokedexReducer.searchInput}
            type="text"
            placeholder="Search name or ID..."
          />
          <button
            className="w-full cursor-pointer rounded-sm border-3 border-red-800 bg-blue-500 p-2 text-center font-semibold text-white"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </main>
  );
};

export default Pokedex;
