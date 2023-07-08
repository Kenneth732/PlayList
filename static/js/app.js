

// script.js
const playlist = [
  {
    title: "Song 1",
    image: "images/p3.jpg",
    artist: "Artist 1",
    file: "/assets/LinkinPark.mp3"
  },
  {
    title: "Song 2",
    artist: "Artist 2",
    image: "images/p2.png",
    file: "/assets/y2mate.com - Simple Plan  Addicted Official Video (1).mp3"
  },
  // Add more songs to the playlist array
];

const songList = document.getElementById("song-list");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const nextButton = document.getElementById("next-button");
const previousButton = document.getElementById("previous-button");
const volumeRange = document.getElementById("volume-range");

let currentSongIndex = 0;
let audio = new Audio();

function loadSong(songIndex) {
  const song = playlist[songIndex];
  audio.src = song.file;
  audio.load();
}

const playerControls = document.getElementById("player-controls");

function playSong() {
  audio.play();
  playerControls.style.backgroundImage = `url(${playlist[currentSongIndex].image})`;
  playerControls.classList.add("player-controls-active");
}

function pauseSong() {
  audio.pause();
  playerControls.classList.remove("player-controls-active");
}



function playNextSong() {
  currentSongIndex = (currentSongIndex + 1) % playlist.length;
  loadSong(currentSongIndex);
  playSong();
}

function playPreviousSong() {
  currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
  loadSong(currentSongIndex);
  playSong();
}
