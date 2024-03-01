import { circularLinkedList } from "./dependencies.js"

circularLinkedList.push('On Melancholy Hill', 'src/Audio/On Melancholy Hill.mp3')
circularLinkedList.push('Baby Queen', 'src/Audio/Baby Queen.mp3')
circularLinkedList.push('Empire Ants','src/Audio/Empire Ants.mp3')
circularLinkedList.push('Whay You Know','src/Audio/What You Know.mp3')

const pause = document.getElementById("playPause")
pause.addEventListener("click",()=>{
    playPause()
})

const siguiente = document.getElementById("next")
siguiente.addEventListener("click",()=>{
    next()
})

const anterior = document.getElementById("previus")
anterior.addEventListener("click",()=>{
    previous()
})

function playPause() {
    if (circularLinkedList.isPlaying) {
      circularLinkedList.pause()
    } else {
      circularLinkedList.resume()
    }
  }

function next() {
  circularLinkedList.next()
}

function previous() {
  circularLinkedList.previous()
}
