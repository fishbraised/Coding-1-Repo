let formConEl = document.getElementById("formCon");
let siteNameEl = document.getElementById("siteName");
let siteUrlEl = document.getElementById("siteUrl");
let nameErrorEl = document.getElementById("nameError");
let urlErrorEl = document.getElementById("urlError");
let submitBtnEl = document.getElementById("submitBtn");
let bookmarkListEl = document.getElementById("bookmarkList");

let allBookmarks = onBeginCheck();

function onBeginCheck() {
  let prevData = localStorage.getItem("allBookmarks");
  console.log(prevData);
  if (prevData === null) {
    return [];
  } else {
    return JSON.parse(prevData);
  }
}

siteNameEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    nameErrorEl.textContent = "Required*";
  } else {
    nameErrorEl.textContent = "";
  }
});

siteUrlEl.addEventListener("change", function (event) {
  if (event.target.value === "") {
    urlErrorEl.textContent = "Required*";
  } else {
    urlErrorEl.textContent = "";
  }
});

formConEl.addEventListener("submit", onSubmitClick);

function onSubmitClick(event) {
  event.preventDefault();
  let nameInput = siteNameEl.value;
  let urlInput = siteUrlEl.value;
  console.log(allBookmarks);
  let bookmarkObj = {
    id: allBookmarks.length + 1,
    name: nameInput,
    url: urlInput,
  };

  allBookmarks.push(bookmarkObj);
  localStorage.setItem("allBookmarks", JSON.stringify(allBookmarks));
  onCreateItem(bookmarkObj);
}

function onCreateItem(bookmarkObj) {
  let itemEl = document.createElement("li");
  itemEl.classList.add("bookmark-item");

  let nameEl = document.createElement("p");
  nameEl.textContent = bookmarkObj.name;
  nameEl.classList.add("bookmark-name");
  itemEl.appendChild(nameEl);

  let linkEl = document.createElement("a");
  linkEl.textContent = "Visit";
  linkEl.href = bookmarkObj.url;
  linkEl.target = "_blank";
  linkEl.classList.add("bookmark-link");
  itemEl.appendChild(linkEl);

  bookmarkListEl.appendChild(itemEl);
}

for (let obj of allBookmarks) {
  onCreateItem(obj);
}
