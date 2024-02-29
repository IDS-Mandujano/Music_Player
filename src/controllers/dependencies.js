import { LinkedList } from "../models/LinkedList/LinkedList.js";

const customEqualsFn = (a, b) => {
    return a === b;
}

const list = new LinkedList(customEqualsFn);

export { list };
