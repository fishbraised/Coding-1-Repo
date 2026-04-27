// function headingChange() {
//   document.getElementById("heading").style.color = "green";
//   document.getElementById("heading").textContent = "4.0 Technologies";
// }

function switchOff() {
  document.getElementById("bulb").src =
    "https://res.cloudinary.com/dkoqbt4pc/image/upload/v1675424989/Cat%20and%20Light/Image20230203194817_fjujls.png";
  document.getElementById("cat").src =
    "https://res.cloudinary.com/dkoqbt4pc/image/upload/v1675424985/Cat%20and%20Light/Image20230203194822_zb0zgu.png";
  document.getElementById("buttonsHeading").textContent = "Switched Off";
  document.getElementById("offButton").style.backgroundColor = "#e12d39";
  document.getElementById("onButton").style.backgroundColor = "#cbd2d9";
}

function switchOn() {
  document.getElementById("bulb").src =
    "https://res.cloudinary.com/dkoqbt4pc/image/upload/v1675424975/Cat%20and%20Light/Image20230203194654_h8zj6m.png";
  document.getElementById("cat").src =
    "https://res.cloudinary.com/dkoqbt4pc/image/upload/v1675424967/Cat%20and%20Light/Image20230203194618_cbilmr.png";
  document.getElementById("buttonsHeading").textContent = "Switched On";
  document.getElementById("offButton").style.backgroundColor = "#cbd2d9";
  document.getElementById("onButton").style.backgroundColor = "#22c55e";
}
