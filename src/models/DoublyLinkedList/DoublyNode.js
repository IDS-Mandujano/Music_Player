import { Node } from "../LinkedList/Node.js"

export class DoublyNode extends Node {

    #prev
    constructor(element,next,prev){
        super(element,next)
        this.#prev = prev
    }
    
}