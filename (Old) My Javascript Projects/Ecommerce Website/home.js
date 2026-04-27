let text = "The CHRISTMAS SALE is now back!";
let headingEl = document.getElementById("saleHeading");
let i = 0;
function typingAnimation() {
  if (i < text.length) {
    let currentText = headingEl.textContent;
    currentText += text[i];
    headingEl.textContent = currentText;
    i += 1;
    setTimeout(typingAnimation, 200);
  }
}

typingAnimation();
