let bgConEl = document.getElementById("bgCon");
let searchBarEl = document.getElementById("searchBar");
let searchListEl = document.getElementById("searchList");
let loaderEl = document.getElementById("loader");

searchBarEl.addEventListener("keyup", onSearch);

function onSearch(event) {
  if (event.key === "Enter") {
    const userInput = searchBarEl.value;
    const url =
      "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=" +
      userInput +
      "&pageNumber=1&pageSize=10&autoCorrect=true";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "74ace45309msha560691fb54c6e0p1b1d21jsnee8a20845bfd",
        "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      },
    };

    searchListEl.textContent = "";
    loaderEl.classList.remove("hide");

    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        let { value, totalCount } = jsonData;
        loaderEl.classList.add("hide");
        displayResults(value, totalCount);
      });
  }
}

function displayResults(searchResults, totalCount) {
  let totalCountEl = document.createElement("h1");
  totalCountEl.textContent = `${totalCount} results found.`;
  totalCountEl.classList.add("total-count");
  bgConEl.appendChild(totalCountEl);

  for (let obj of searchResults) {
    createAndAppendResults(obj);
  }
}

function createAndAppendResults(result) {
  console.log(result, "this is each i");
  let { title, url, description } = result;

  let resultConEl = document.createElement("li");

  // create title
  let titleEl = document.createElement("a");
  titleEl.textContent = title;
  titleEl.href = url;
  titleEl.target = "_blank";
  titleEl.classList.add("result-title");
  resultConEl.appendChild(titleEl);

  let brEl = document.createElement("br");
  resultConEl.appendChild(brEl);

  // create url
  let urlEl = document.createElement("a");
  urlEl.textContent = url;
  urlEl.href = url;
  urlEl.target = "_blank";
  urlEl.classList.add("result-url");
  resultConEl.appendChild(urlEl);

  // create desc
  let descEl = document.createElement("p");
  descEl.textContent = description;
  descEl.classList.add("result-desc");
  resultConEl.appendChild(descEl);

  searchListEl.appendChild(resultConEl);
}
