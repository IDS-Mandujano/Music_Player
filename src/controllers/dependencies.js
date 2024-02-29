import { DoublyLinkedList } from "../models/DoublyLinkedList/DoublyLinkedList.js";
import { LinkedList } from "../models/LinkedList/LinkedList.js";
import { CircularLinkedList } from "../models/CircularLinkedList/CircularLinkedList.js"

const customEqualsFn = (a, b) => {
    return a === b;
}

const list = new LinkedList(customEqualsFn);
const doublyList = new DoublyLinkedList(customEqualsFn)
const circularLinkedList = new CircularLinkedList(customEqualsFn)

export { list };
export { doublyList }
export { circularLinkedList }
