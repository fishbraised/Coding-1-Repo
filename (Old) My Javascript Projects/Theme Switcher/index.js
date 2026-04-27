let bgContainerEl = document.getElementById("bgContainer");
let headingEl = document.getElementById("heading");
let themeUserInputEl = document.getElementById("themeUserInput");

themeUserInputEl.addEventListener("keydown", onThemeSwitch);

function onThemeSwitch(event) {
  if (event.key === "Enter") {
    let userInputValue = themeUserInputEl.value.toLowerCase();

    if (userInputValue === "light") {
      bgContainerEl.style.backgroundImage =
        "url(https://res.cloudinary.com/dsf2gec5l/image/upload/v1679301018/WebDev/Session%20-%2031/light_dbzx3j.jpg)";
      headingEl.style.color = "#014d40";
    } else if (userInputValue === "dark") {
      bgContainerEl.style.backgroundImage =
        "url(https://res.cloudinary.com/dsf2gec5l/image/upload/v1679301019/WebDev/Session%20-%2031/dark_g3k7kc.jpg)";
      headingEl.style.color = "#ffffff";
    } else {
      alert("Enter a valid theme.");
    }
  }
}
