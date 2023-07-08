// script.js
const playlist = [
    {
      title: "Song 1",
      artist: "Artist 1",
      file: "/assets/LinkinPark.mp3"
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      file: "/assets/y2mate.com - Simple Plan  Addicted Official Video (1).mp3"
    },
    // Add more songs to the playlist array
];

const songList = document.querySelector('#song-list');
const playButton = document.querySelector('#play-button');
const pauseButton = document.querySelector('#pause-button');
const nextButton = document.querySelector('#next-button');
const previousButton = document.querySelector('#previous-button');
const volumeRange = document.querySelector('#volume-range');

let currentSongIndex = 0;
let audio = new Audio();

function loadSong(songIndex){
    const song = playlist[songIndex]
    audio.src = song.file;
    audio.load()
}

function playSong()