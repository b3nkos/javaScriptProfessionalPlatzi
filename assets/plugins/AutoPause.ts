import MediaPlayer from "../MediaPlayer";

class AutoPause {

  private threshold: number;
  private player: MediaPlayer

  constructor() {
    this.threshold = 0.25;
    this.handlerIntersection = this.handlerIntersection.bind(this);
    this.handleVisivilityChange = this.handleVisivilityChange.bind(this);
  }

  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handlerIntersection, {
      threshold: this.threshold
    });

    observer.observe(this.player.media);

    document.addEventListener("visibilitychange", this.handleVisivilityChange);
  }

  private handleVisivilityChange() {
    const isVisible = document.visibilityState === "visible";
    if(isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  private handlerIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    const isVisible = entry.intersectionRatio >= this.threshold;

    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

}

export default AutoPause;