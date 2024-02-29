import { list } from "./dependencies.js";

// Prueba de push
list.push(1);
list.push(2);
list.push(3);
list.push("Hola");

// Prueba de insert
list.insert("Inser exitoso", 0);

// Prueba de remove
list.remove();

// Prueba de getElementAt y toString
for (let i = 0; i < list.size(); i++) {
    const nodeData = list.getElementAt(i).getData();
    console.log(nodeData);
}

// Prueba de indexOf
console.log("Index of 2:", list.indexOf(2));

// Prueba de size
console.log("Size:", list.size());

// Prueba de isEmpty
console.log("Is empty:", list.isEmpty());

// Prueba de getHead
console.log("Head:", list.getHead());
