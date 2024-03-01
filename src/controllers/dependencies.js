import { CircularLinkedList } from "../models/CircularLinkedList.js"
const customEqualsFn = (a, b) => {
    return a === b;
}

const circularLinkedList = new CircularLinkedList(customEqualsFn)
export { circularLinkedList }