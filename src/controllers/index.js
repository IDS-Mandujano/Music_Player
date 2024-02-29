import { list, doublyList,  circularLinkedList } from "./dependencies.js";

// Prueba de push
doublyList.push(1);
doublyList.push(2);
doublyList.push(3);
doublyList.push("Hola");

// Prueba de insert
doublyList.insert("Inser exitoso", 0);

// Prueba de remove
doublyList.remove();

// Prueba de getElementAt y toString
for (let i = 0; i < doublyList.size(); i++) {
    const nodeData = doublyList.getElementAt(i).getData();
    console.log(nodeData);
}

// Prueba de indexOf
console.log("Index of 2:", doublyList.indexOf(2));

// Prueba de size
console.log("Size:", doublyList.size());

// Prueba de isEmpty
console.log("Is empty:", doublyList.isEmpty());

// Prueba de getHead y getTail
console.log("Head:", doublyList.getHead());
console.log("Tail:", doublyList.getTail());

