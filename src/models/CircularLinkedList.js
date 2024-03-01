import { Node } from "./Node.js"

export class CircularLinkedList {
    constructor() {
      this.head = null
      this.current = null
      this.isPlaying = false
    }

    push(data, source) {
        const newNode = new Node(data, source)
        if (!this.head) {
          this.head = newNode
          this.head.next = this.head
          this.current = this.head
        } else {
          newNode.next = this.head
          let current = this.head
          while (current.next !== this.head) {
            current = current.next
          }
          current.next = newNode
        }
      }

    play() {
        const audioPlayer = document.getElementById('audioPlayer')
        const progressBar = document.getElementById('progressBar')
        
        if (this.current && this.current.source) {
          console.log('Reproduciendo:', this.current.data)
          audioPlayer.src = this.current.source
          audioPlayer.play()
          this.isPlaying = true
    
          audioPlayer.addEventListener('timeupdate', function () {
            const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100
            progressBar.style.width = percent + '%'
            progressBar.setAttribute('aria-valuenow', percent)
          })
        } else {
          console.log('La lista está vacía o la fuente es indefinida')
        }
      }
    
      pause() {
        const audioPlayer = document.getElementById('audioPlayer')
        audioPlayer.pause()
        this.isPlaying = false
        console.log('Pausado:', this.current.data)
      }
    
      resume() {
        const audioPlayer = document.getElementById('audioPlayer')
        audioPlayer.play()
        this.isPlaying = true
        console.log('Reanudando:', this.current.data)
      }
    
      next() {
        if (this.current) {
          this.current = this.current.next
          this.play()
        }
      }
    
      previous() {
        if (this.current) {
          let temp = this.head
          while (temp.next !== this.current) {
            temp = temp.next
          }
          this.current = temp
          this.play()
        }
      }
}