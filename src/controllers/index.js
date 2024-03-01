import { circularLinkedList } from "./dependencies"

circularLinkedList.add('Baby Queen', 'src/Audio/Baby Queen.mp3');
circularLinkedList.add('Judas', 'src/Audio/Judas.mp3');
circularLinkedList.add('On Melancholy Hill', 'src/Audio/On Melancholy Hill.mp3');

function playPause() {
  if (playlist.isPlaying) {
    playlist.pause();
  } else {
    playlist.resume();
  }
}

function next() {
  playlist.next();
}

function previous() {
  playlist.previous();
}