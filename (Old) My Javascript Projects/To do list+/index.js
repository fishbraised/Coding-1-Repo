let itemsListEl = document.getElementById("itemsList");
let tagsButtonContainerEl = document.getElementById("tags-button-container");
let saveButtonEl = document.getElementById("saveButton");
let addButtonEl = document.getElementById("addButton");
let textInputEl = document.getElementById("createTaskInput");

addButtonEl.onclick = function () {
  onAddItem();
};

textInputEl.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    onAddItem();
  }
});

// GETTING ITEMS FROM LOCAL STORAGE IF PRESENT AT THE START OF APP
function getItemFromLocal() {
  let JSONItem = localStorage.getItem("items");
  let parsedItem = JSON.parse(JSONItem);

  if (parsedItem === null) {
    return [];
  }
  return parsedItem;
}

let items = getItemFromLocal();
console.log(items);

for (let item of items) {
  createTask(item);
}

saveButtonEl.onclick = function () {
  localStorage.setItem("items", JSON.stringify(items));
  console.log("logged");
};

// WHEN ADD BUTTON CLICKED, ADDING ITEMS IN DISPLAY & ITEMS ARRAY
function onAddItem() {
  let textInputEl = document.getElementById("createTaskInput");
  let selectInputEl = document.getElementById("tagsDropdownInput");
  console.log(selectInputEl.value);
  if (textInputEl.value === "") {
    alert("Enter value input.");
    return;
  }

  let newItems = {
    text: textInputEl.value,
    idModifier: items.length + 1,
    isChecked: false,
    category: selectInputEl.value,
  };
  items.push(newItems);
  createTask(newItems);
  textInputEl.value = "";
  textInputEl.focus();
}

// WHEN USER CLICKS ON A CHECKBOX, UPDATING DISPLAY & TEMS ARRAY
function crossOutLabel(labelId, itemId) {
  let labelElement = document.getElementById(labelId);
  labelElement.classList.toggle("checked");

  let objectIndex = items.findIndex(function (eachItem) {
    let eachItemId = "item" + eachItem.idModifier;
    if (eachItemId === itemId) {
      return true;
    } else {
      return false;
    }
  });

  let itemObject = items[objectIndex];
  if (itemObject.isChecked === false) {
    itemObject.isChecked = true;
  } else {
    itemObject.isChecked = false;
  }
  console.log(itemObject);
}

// WHEN USER CLICKS ON DELETE, DELETING FROM DISPLAY & ITEMS ARRAY
function deleteItem(itemId) {
  let itemElement = document.getElementById(itemId);
  itemsListEl.removeChild(itemElement);

  let deleteElementIndex = items.findIndex(function (eachItem) {
    let eachItemId = "item" + eachItem.uniqueId;
    if (eachItemId === itemId) {
      return true;
    } else {
      return false;
    }
  });
  items.splice(deleteElementIndex, 1);
}

// CREATING FUNCTION WHICH CREATES EACH LI ITEM
function createTask(item) {
  let checkboxId = "checkbox" + item.idModifier;
  let labelId = "label" + item.idModifier;
  let itemId = "item" + item.idModifier;

  let itemEl = document.createElement("li");
  itemEl.setAttribute("id", itemId);
  itemEl.classList.add("item");
  itemsListEl.appendChild(itemEl);

  let checkboxEl = document.createElement("input");
  checkboxEl.setAttribute("type", "checkbox");
  checkboxEl.setAttribute("id", checkboxId);
  checkboxEl.classList.add("item-checkbox");
  checkboxEl.onclick = function () {
    crossOutLabel(checkboxId, labelId, itemId);
  };
  itemEl.appendChild(checkboxEl);

  let divEl = document.createElement("div");
  divEl.classList.add("item-container");
  itemEl.appendChild(divEl);

  let labelEl = document.createElement("label");
  labelEl.textContent = item.text;
  labelEl.setAttribute("id", labelId);
  labelEl.setAttribute("for", checkboxId);
  labelEl.classList.add("item-label");
  divEl.appendChild(labelEl);

  let tagLabelEl = document.createElement("label");
  tagLabelEl.textContent = item.category;
  tagLabelEl.classList.add("tag-label-el");
  divEl.appendChild(tagLabelEl);

  let iconEl = document.createElement("i");
  iconEl.classList.add("fas", "fa-trash", "item-icon");
  iconEl.onclick = function () {
    deleteItem(itemId);
  };
  divEl.appendChild(iconEl);
}

// ADDING EVENT LISTENERS TO ALL THE FILTER BUTTONS
let filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach(function (eachBtn) {
  eachBtn.addEventListener("click", onFliter);
});

// WHEN ANY FILTER BUTTON CILCKED, FILTERING LIST ITEMS
let activeFilterButtons = [];

function onFliter(event) {
  let eventId = event.target.id; // Entertainment

  if (activeFilterButtons.includes(eventId)) {
    let removedActiveFilter = activeFilterButtons.filter(function (eachFilter) {
      if (eachFilter !== eventId) {
        return eachFilter;
      }
    });
    activeFilterButtons = removedActiveFilter;
  } else {
    activeFilterButtons.push(eventId);
  }

  if (activeFilterButtons.includes(eventId)) {
    event.target.classList.add("filter-on");
  } else {
    event.target.classList.remove("filter-on");
  }

  if (activeFilterButtons.length > 0) {
    let result = items.filter(function (eachObj) {
      if (activeFilterButtons.includes(eachObj.category)) {
        return eachObj;
      }
    });
    itemsListEl.textContent = "";
    for (let item of result) {
      createTask(item);
    }
  } else {
    itemsListEl.textContent = "";
    for (let item of items) {
      createTask(item);
    }
  }
}
