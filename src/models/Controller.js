export class Controller {
    constructor() {
      this.audioPlayer = document.getElementById('audioPlayer')
      this.progressBar = document.getElementById('progressBar')
    }
  
    playAudio(source) {
      console.log('Reproduciendo:', source)
  
      this.audioPlayer.src = source
      this.audioPlayer.play()
  
      this.audioPlayer.addEventListener('timeupdate', () => {
        const percent = (this.audioPlayer.currentTime / this.audioPlayer.duration) * 100
        this.progressBar.style.width = percent + '%'
        this.progressBar.setAttribute('aria-valuenow', percent)
      });
    }
  
    pauseAudio() {
      this.audioPlayer.pause()
    }
  
    resumeAudio() {
      this.audioPlayer.play()
    }
  }
  