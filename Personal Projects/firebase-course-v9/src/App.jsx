import { Auth } from "./components/auth";
import { db, auth } from "./config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [movieList, setMovieList] = useState([]);

  // New Movie States

  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState(0);
  const [isNewMovieOscar, setNewMovieOscar] = useState(false);

  // Update Title State

  const [updatedTitle, setUpdatedTitle] = useState("");

  const moviesCollectionRef = collection(db, "movies");

  const getMovieList = async () => {
    try {
      // READ THE DATA
      // SET THE MOVIE LIST
      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setMovieList(filteredData);

      console.log(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteMovie = async (id) => {
    try {
      const movieDoc = doc(db, "movies", id);
      await deleteDoc(movieDoc);
    } catch (err) {
      console.error(err);
    }
  };

  const updateMovieTitle = async (id) => {
    try {
      const movieDoc = doc(db, "movies", id);
      await updateDoc(movieDoc, { title: updatedTitle });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log("currentuser: ", auth?.currentUser?.uid);
    getMovieList();
  }, []);

  const onSubmitMovie = async () => {
    try {
      await addDoc(moviesCollectionRef, {
        title: newMovieTitle,
        releaseDate: newReleaseDate,
        receivedAnOscar: isNewMovieOscar,
        userId: auth?.currentUser?.uid,
      });

      getMovieList();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App">
      <Auth />

      <div>
        <input
          onChange={(e) => setNewMovieTitle(e.target.value)}
          type="text"
          placeholder="Movie title..."
        />
        <input
          onChange={(e) => setNewReleaseDate(Number(e.target.value))}
          type="number"
          placeholder="Release date..."
        />
        <input
          id="receivedAnOscar"
          checked={isNewMovieOscar}
          onChange={(e) => setNewMovieOscar(e.target.checked)}
          type="checkbox"
        />
        <label htmlFor="receivedAnOscar">Received an Oscar</label>
        <button onClick={onSubmitMovie}>Submit Movie</button>
      </div>
      <div>
        {movieList.map((movie) => (
          <div key={movie.id}>
            <h1 style={{ color: movie.receivedAnOscar ? "green" : "red" }}>
              {movie.title}
            </h1>
            <p>Date: {movie.releaseDate}</p>

            <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>

            <input
              onChange={(e) => setUpdatedTitle(e.target.value)}
              type="text"
              placeholder="New title..."
            />
            <button onClick={() => updateMovieTitle(movie.id)}>
              Update Title
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
