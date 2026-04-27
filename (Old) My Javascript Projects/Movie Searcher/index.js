let inputConEl = document.getElementById("inputCon");
let searchInputEl = document.getElementById("searchInput");
let iconConEl = document.getElementById("iconCon");
let loaderEl = document.getElementById("loader");
let resultsConEl = document.getElementById("resultsCon");

inputConEl.addEventListener("submit", onSearch);

function onSearch(event) {
  event.preventDefault();
  const searchInputValue = searchInputEl.value;
  const url =
    "https://streaming-availability.p.rapidapi.com/v2/search/title?title=" +
    searchInputValue +
    "&country=us&show_type=movie&output_language=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "74ace45309msha560691fb54c6e0p1b1d21jsnee8a20845bfd",
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };

  resultsConEl.textContent = "";
  loaderEl.classList.remove("hide");

  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      loaderEl.classList.add("hide");

      console.log(jsonData);
      let { result } = jsonData;
      console.log(result);
      displayResult(result);
    });
}

function displayResult(result) {
  let movieHTML = result.map(function (eachObj) {
    return `
    <div class="movie-con">
      <div class="img-con">
        <img
          class="img"
          src=${eachObj.posterURLs.original}
        />
      </div>

      <div class="text-con">
        <h1 class="title">${eachObj.title}</h1>
        <p class="desc">
          ${eachObj.overview}
        </p>

        <div class="info-con">
          <div class="info-tag">
            <h4 class="tag">Release</h4>
            <p class="year">${eachObj.year}</p>
          </div>

          <div class="info-tag">
            <h4 class="tag">Rating</h4>
            <p class="rating">${
              eachObj.imdbRating / 10
            }<span class="rating-subpart">/10</span></p>
          </div>

          <div class="info-tag">
            <h4 class="tag">Genre</h4>
            <p class="genre">${extractGenres(eachObj.genres)}</p>
          </div>
        </div>
      </div>
    </div>
    `;
  });

  movieHTML = movieHTML.join("");
  resultsConEl.innerHTML = movieHTML;
}

function extractGenres(arr) {
  let displayGenreList = arr.map(function (eachObj) {
    return eachObj.name;
  });
  let displayGenreStr = displayGenreList.join(", ");

  return displayGenreStr;
}
