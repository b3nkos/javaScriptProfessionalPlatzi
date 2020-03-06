import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const video = document.querySelector("video");
const playButton: HTMLElement = document.getElementById("playButton");
const muteButton: HTMLElement = document.getElementById("muteButton");

const player: MediaPlayer = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause()] });

playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/serviceWorker.js')
    .catch(error => {
      console.log(error.message);
    });
}