import { circularLinkedList } from "./dependencies.js"

circularLinkedList.push('On Melancholy Hill', 'src/Audio/On Melancholy Hill.mp3')
circularLinkedList.push('Baby Queen', 'src/Audio/Baby Queen.mp3')
circularLinkedList.push('Empire Ants','src/Audio/Empire Ants.mp3')
circularLinkedList.push('Whay You Know','src/Audio/What You Know.mp3')

let nameSong = document.getElementById("nameSong")
updateSongName()

function updateSongName() {
  if (circularLinkedList.current) {
    nameSong.innerText = circularLinkedList.current.data
  } else {
    nameSong.innerText = "No hay canción"
  }
}

const pause = document.getElementById("playPause")
pause.addEventListener("click",()=>{
    playPause()
})

const siguiente = document.getElementById("next")
siguiente.addEventListener("click",()=>{
    next()
    updateSongName()
})

const anterior = document.getElementById("previus")
anterior.addEventListener("click",()=>{
    previous()
    updateSongName()
})

function playPause() {
  if(circularLinkedList.isPlaying == false){
    circularLinkedList.play()
  }else{
    if (circularLinkedList.isPlaying) {
      circularLinkedList.pause()
    } else {
      circularLinkedList.resume()
    }
  }

  }

function next() {
  circularLinkedList.next()
}

function previous() {
  circularLinkedList.previous()
}
