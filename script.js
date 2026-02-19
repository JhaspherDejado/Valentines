// Detect desktop
if (window.innerWidth > 768) {
  document.querySelector(".container").style.display = "none";
  document.querySelector(".desktop-warning").style.display = "block";
}

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

let yesScale = 1;
let noClickCount = 0;

function vibrate(ms = 40) {
  if (navigator.vibrate) navigator.vibrate(ms);
}

function moveNoButton() {
  vibrate(30);
  noClickCount++;

  const x = Math.random() * 240 - 120;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  yesScale += 0.1;
  yesBtn.style.transform = `translateX(-50%) scale(${yesScale})`;

  // Change text after many clicks
  if (noClickCount === 5) {
    noBtn.innerHTML = "Stop it 😭";
  }
  if (noClickCount === 10) {
    noBtn.innerHTML = "You can't win 😏";
  }
}

noBtn.addEventListener("touchstart", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

yesBtn.addEventListener("click", () => {
  vibrate([60, 40, 60]);

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

// Floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 22 + 14 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 300);
