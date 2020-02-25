import MediaPlayer from './MediaPlayer';

const video = document.querySelector("video");
const button = document.getElementById("playButton");

const player = new MediaPlayer({ el: video });

button.onclick = () => player.togglePlay();