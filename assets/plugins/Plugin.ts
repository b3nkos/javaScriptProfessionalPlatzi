import MediaPlayer from '../MediaPlayer';

interface Plugin {
  run:(mediaPlayer: MediaPlayer) => void
}

export default Plugin;