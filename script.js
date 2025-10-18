const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const msg = document.getElementById("message");
const heart = document.querySelector(".heart");
const heading = document.querySelector(".main-char");
const music = document.getElementById("bgMusic");

const yesMessages = [
  "Yes — camera on or off, you’re always the main character 💃🎬",
  "Yes — *‘You’re my Tumblr girl in a world so fake’* — realest one I know 💖",
  "Yes — even Seedhe Maut would say your energy’s ‘seedha lit’ 🔥🎤",
  "Yes — your vlogs might be ‘cringy,’ but they’re my favorite kind of chaos 😏📸",
  "Yes — you turn cringe into charm and it’s kinda dangerous 😳✨",
  "Yes — *‘She’s my Tumblr girl, I’m her G-Eazy vibe’* — you get it 😉💫",
  "Yes — even your bloopers deserve a fan club 💕📹"
];
let index = 0;

yesBtn.addEventListener("click", () => {
  msg.style.opacity = 0;
  heart.style.transform = "scale(1.4)";
  heading.style.transform = "scale(1.05)";
  heading.style.textShadow = "0 0 25px #ffb3ec, 0 0 45px #c3a6ff, 0 0 60px #a5d8ff";
  if (music.paused) music.play();
  setTimeout(() => {
    msg.innerHTML = yesMessages[index];
    msg.style.opacity = 1;
    index = (index + 1) % yesMessages.length;
    sparkleBurst();
    summonPokemonWave();
    heart.style.transform = "scale(1.2)";
    heading.style.transform = "scale(1)";
    heading.style.textShadow = "0 0 8px #ffb3ec, 0 0 16px #c3a6ff, 0 0 24px #a5d8ff";
  }, 300);
});

noBtn.addEventListener("click", () => {
  msg.innerHTML = "Liar 😏 try again!";
  msg.style.opacity = 1;
  shake(msg);
});

function shake(e) {
  e.style.transition = "transform 0.1s";
  e.style.transform = "translateX(-5px)";
  setTimeout(() => (e.style.transform = "translateX(5px)"), 100);
  setTimeout(() => (e.style.transform = "translateX(0)"), 200);
}

function sparkleBurst() {
  for (let i = 0; i < 8; i++) {
    const s = document.createElement("div");
    s.classList.add("sparkle");
    s.textContent = "✨";
    s.style.left = `${50 + (Math.random() * 80 - 40)}%`;
    s.style.top = `${50 + (Math.random() * 40 - 20)}%`;
    s.style.animationDelay = `${Math.random()}s`;
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1200);
  }
}

function spawnPokemon() {
  const imgs = ["infernape.png", "lucario.png", "greninja.png", "latias.png"];
  const img = document.createElement("img");
  img.src = imgs[Math.floor(Math.random() * imgs.length)];
  img.classList.add("floating-pokemon");
  img.style.left = Math.random() * 100 + "%";
  img.style.top = "100%";
  document.body.appendChild(img);
  setTimeout(() => img.remove(), 6000);
}

function summonPokemonWave() {
  for (let i = 0; i < 5; i++) setTimeout(spawnPokemon, i * 500);
}