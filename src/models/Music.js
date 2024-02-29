export class Music{
    #name
    #author
    #song

    setName(name){
        this.#name = name
    }
    getName(){
        return this.#name
    }

    setAuthor(author){
        this.#author = author
    }
    getAuthor(){
        return this.#author
    }

    setSong(song){
        this.#song = song
    }
    getSong(){
        return this.#song
    }
}