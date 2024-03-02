import { Node } from "./Node.js"
import { Controller } from "./Controller.js"

export class CircularLinkedList {
  constructor() {
    this.head = null
    this.current = null
    this.isPlaying = false
    this.controller = new Controller()
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
    this.getData(data)
  }

  play() {
    if (this.current && this.current.source) {
      this.isPlaying = true
      this.controller.playAudio(this.current.source)
    } else {
      console.log('La lista está vacía o la fuente es indefinida')
    }
  }

  pause() {
    this.isPlaying = false
    this.controller.pauseAudio()
  }

  resume() {
    this.isPlaying = true
    this.controller.resumeAudio()
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

  getData(data){
    return data
  }

}
