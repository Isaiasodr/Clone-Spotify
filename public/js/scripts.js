let musics = [
  {
    name: "Ark",
    artist: "Ship Wrek & Zookeepers",
    src: "musicas/Ship Wrek & Zookeepers - Ark [NCS Release].mp3",
    img: "img/ark tumbnail.png",
  },
  {
    name: "We Are",
    artist: "Jo Cohen & Sex Whales",
    src: "musicas/Jo Cohen & Sex Whales - We Are [NCS Release].mp3",
    img: "img/we are tumbnail.png",
  },
  {
    name: "Heroes",
    artist: "RetroVision",
    src: "musicas/RetroVision - Heroes [NCS Release].mp3",
    img: "img/heroes tumbnail.png",
  },
  {
    name: "On & On",
    artist: "Cartoon",
    src: "musicas/Cartoon - On & On (feat. Daniel Levi) [NCS Release].mp3",
    img: "img/on & on tumbnail.png",
  },

  {
    name: "Invincible",
    artist: "DEAF KEV",
    src: "musicas/DEAF KEV - Invincible [NCS Release].mp3",
    img: "img/invicible tumbnail.png",
  },

  {
    name: "Need Ya",
    artist: "Syn Cole",
    src: "musicas/Syn Cole - Need Ya [NCS Release].mp3",
    img: "img/need ya tymbnail.png",
  },
];

let music = document.querySelector("audio");
let image = document.querySelector("#img");
let nameMusic = document.querySelector(".data-music h3");
let nameArtist = document.querySelector(".data-music p");
let myProgressBar = document.querySelector("#myProgressBar");
let playMusic = document.querySelector("#bottom-play-timeline");
let musicIndex = 0;
let cardPlay = document.querySelector(".bottom-play");
renderMusic(musicIndex);

/* play e pause */

/* card */
cardPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    document.querySelector(".player").style.opacity = "1";
    document.querySelector("#gif").style.opacity = "1";
    playMusic.classList.remove("fa-circle-play");
    playMusic.classList.add("fa-circle-pause");
    cardPlay.classList.remove("fa-circle-play");
    cardPlay.classList.add("fa-circle-pause");
  } else {
    music.pause();
    playMusic.classList.remove("fa-circle-pause");
    playMusic.classList.add("fa-circle-play");
    cardPlay.classList.remove("fa-circle-pause");
    cardPlay.classList.add("fa-circle-play");
  }
});
/* player */
playMusic.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    playMusic.classList.remove("fa-circle-play");
    playMusic.classList.add("fa-circle-pause");
    cardPlay.classList.remove("fa-circle-play");
    cardPlay.classList.add("fa-circle-pause");
  } else {
    music.pause();
    playMusic.classList.remove("fa-circle-pause");
    playMusic.classList.add("fa-circle-play");
    cardPlay.classList.remove("fa-circle-pause");
    cardPlay.classList.add("fa-circle-play");
  }
});

/* next and previous */
document.querySelector(".previous").addEventListener("click", () => {
  musicIndex--;
  music.currentTime = 0;
  if (musicIndex < 0) {
    musicIndex = 5;
  }
  renderMusic(musicIndex);
  music.play();
});

document.querySelector(".next").addEventListener("click", () => {
  musicIndex++;
  music.currentTime = 0;
  if (musicIndex > 5) {
    musicIndex = 0;
  }
  renderMusic(musicIndex);
  music.play();
  playMusic.classList.remove("fa-circle-play");
  playMusic.classList.add("fa-circle-pause");
  cardPlay.classList.remove("fa-circle-play");
  cardPlay.classList.add("fa-circle-pause");
});

/* events */
music.addEventListener("timeupdate", () => {
  progress = parseInt((music.currentTime / music.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  music.currentTime = (myProgressBar.value * music.duration) / 100;
});

/* functions */

function renderMusic(index) {
  music.setAttribute("src", musics[index].src);
  music.addEventListener("loadeddata", () => {
    nameMusic.textContent = musics[index].name;
    nameArtist.textContent = musics[index].artist;
    image.src = musics[index].img;
  });
}

music.onended = function () {
  musicIndex++;
  renderMusic(musicIndex);
  music.play();
};
