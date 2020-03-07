import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import AdsPlugin from './plugins/Ads';

const video = document.querySelector("video");
const playButton: HTMLElement = document.getElementById("playButton");
const muteButton: HTMLElement = document.getElementById("muteButton");

const player: MediaPlayer = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause(), new AdsPlugin()] });

playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/serviceWorker.js')
    .catch(error => {
      console.log(error.message);
    });
}