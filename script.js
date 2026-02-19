const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const buttonsContainer = document.querySelector(".buttons");

let yesScale = 1;
let noClickCount = 0;

function moveNoButton() {
  noClickCount++;

  const containerRect = buttonsContainer.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width;
  const maxY = containerRect.height - btnRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
  noBtn.style.transform = "none";

  yesScale += 0.1;
  yesBtn.style.transform = `translateX(-50%) scale(${yesScale})`;

  if (noClickCount === 5) {
    noBtn.innerHTML = "Stop it 😭";
  }

  if (noClickCount === 10) {
    noBtn.innerHTML = "You can't win 😏";
  }
}

noBtn.addEventListener("click", moveNoButton);

yesBtn.addEventListener("click", () => {
  message.style.display = "block";
  message.innerHTML = `
    💖 YOU SAID YES 💖<br><br>
    I knew it 😍<br>
    Thank you Aki HEHEHE.<br><br>
    Happy Valentine’s Day 🌹
  `;

  noBtn.style.display = "none";
  yesBtn.style.transform = "translateX(-50%) scale(1.3)";
});

/* Floating hearts */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 22 + 14 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 300);
