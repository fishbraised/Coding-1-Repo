let contactInfoContainerEl = document.getElementById("contactInfoContainer");
let cardSearchNameInputEl = document.getElementById("searchNameInput");
let cardSearchEmailInputEl = document.getElementById("searchEmailInput");
let addButtonEl = document.getElementById("addButton");

cardSearchNameInputEl.addEventListener("keyup", nameSearch);
cardSearchEmailInputEl.addEventListener("keyup", emailSearch);

addButtonEl.onclick = function () {
  addCard();
};

function getCardInfo() {
  let JSONCardInfo = localStorage.getItem("cardInfoList");
  console.log(JSONCardInfo);
  let parsedCardInfo = JSON.parse(JSONCardInfo);
  if (parsedCardInfo === null) {
    return [];
  } else {
    return parsedCardInfo;
  }
}

let cardInfoList = getCardInfo();
console.log(cardInfoList);

function nameSearch() {
  let searchNameInputValue = cardSearchNameInputEl.value;

  contactInfoContainerEl.textContent = "";

  cardInfoList.forEach(function (eachObj) {
    if (eachObj.name.includes(searchNameInputValue)) {
      createCard(eachObj);
    }
  });

  if (contactInfoContainerEl.textContent === "") {
    let errorParaEl = document.createElement("p");
    errorParaEl.textContent = "NO CONTACTS FOUND :(";
    errorParaEl.classList.add("error-msg");
    contactInfoContainerEl.appendChild(errorParaEl);

    let errorImgEl = document.createElement("img");
    errorImgEl.src =
      "https://res.cloudinary.com/saiuttej/image/upload/v1680193455/File_searching-bro_opc1ve.png";
    errorImgEl.classList.add("error-img");
    contactInfoContainerEl.appendChild(errorImgEl);
  }
}

function emailSearch() {
  let searchEmailInputValue = cardSearchEmailInputEl.value;

  contactInfoContainerEl.textContent = "";

  cardInfoList.forEach(function (eachObj) {
    if (eachObj.email.includes(searchEmailInputValue)) {
      createCard(eachObj);
    }
  });

  if (contactInfoContainerEl.textContent === "") {
    let errorParaEl = document.createElement("p");
    errorParaEl.textContent = "NO CONTACTS FOUND :(";
    errorParaEl.classList.add("error-msg");
    contactInfoContainerEl.appendChild(errorParaEl);

    let errorImgEl = document.createElement("img");
    errorImgEl.src =
      "https://res.cloudinary.com/saiuttej/image/upload/v1680193455/File_searching-bro_opc1ve.png";
    errorImgEl.classList.add("error-img");
    contactInfoContainerEl.appendChild(errorImgEl);
  }
}

for (let cardInfo of cardInfoList) {
  createCard(cardInfo);
}

function addCard() {
  let cardNameInputEl = document.getElementById("nameInput");
  let cardPhoneInputEl = document.getElementById("phoneInput");
  let cardEmailInputEl = document.getElementById("emailInput");

  if (
    cardNameInputEl.value === "" ||
    cardPhoneInputEl.value === "" ||
    cardEmailInputEl.value === ""
  ) {
    alert("Please enter input details correctly.");
  } else {
    let newCardInfo = {
      name: cardNameInputEl.value,
      phone: cardPhoneInputEl.value,
      email: cardEmailInputEl.value,
      uniqueId: cardInfoList.length + 1,
    };
    cardInfoList.push(newCardInfo);
    localStorage.setItem("cardInfoList", JSON.stringify(cardInfoList));
    createCard(newCardInfo);
    cardNameInputEl.value = "";
    cardPhoneInputEl.value = "";
    cardEmailInputEl.value = "";
  }
}

function deleteCard(contactCardId) {
  let contactCardEl = document.getElementById(contactCardId);
  contactInfoContainerEl.removeChild(contactCardEl);

  let contactCardIndex = cardInfoList.findIndex(function (eachCard) {
    let eachContactCardId = "card" + eachCard.uniqueId;
    if (eachContactCardId === contactCardId) {
      return true;
    } else {
      return false;
    }
  });
  cardInfoList.splice(contactCardIndex, 1);
  localStorage.setItem("cardInfoList", cardInfoList);
}

function createCard(cardInfo) {
  let contactCardId = "card" + cardInfo.uniqueId;

  let contactCardEl = document.createElement("li");
  contactCardEl.classList.add("contact-card");
  contactCardEl.id = contactCardId;
  contactInfoContainerEl.appendChild(contactCardEl);

  let contactNameEl = document.createElement("p");
  contactNameEl.classList.add("contact-text");
  contactNameEl.textContent = cardInfo.name;
  contactCardEl.appendChild(contactNameEl);

  let contactPhoneEl = document.createElement("p");
  contactPhoneEl.classList.add("contact-text");
  contactPhoneEl.textContent = cardInfo.phone;
  contactCardEl.appendChild(contactPhoneEl);

  let contactEmailEl = document.createElement("p");
  contactEmailEl.classList.add("contact-text");
  contactEmailEl.textContent = cardInfo.email;
  contactCardEl.appendChild(contactEmailEl);

  let contactTrashEl = document.createElement("i");
  contactTrashEl.classList.add("fa-regular", "fa-trash-can", "contact-icon");
  contactTrashEl.onclick = function () {
    deleteCard(contactCardId);
  };
  contactCardEl.appendChild(contactTrashEl);
}
