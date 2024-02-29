import { DoublyLinkedList } from "../models/DoublyLinkedList/DoublyLinkedList.js";
import { LinkedList } from "../models/LinkedList/LinkedList.js";

const customEqualsFn = (a, b) => {
    return a === b;
}

const list = new LinkedList(customEqualsFn);
const doublyList = new DoublyLinkedList(customEqualsFn)

export { list };
export { doublyList }
