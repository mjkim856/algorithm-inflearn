import { Deque } from "./Deque.mjs";

let deque = new Deque();

console.log("===== addFirst =====");
console.log(`isEmpty: ${deque.isEmpty()}`);
deque.addFirst(1);
deque.addFirst(2);
deque.addFirst(3);
deque.addFirst(4);
deque.addFirst(5);
deque.printAll();       // [5, 4, 3, 2, 1]
console.log(`isEmpty: ${deque.isEmpty()}`);
console.log("\n");

console.log("===== removeFirst =====");
deque.removeFirst();
deque.printAll();       // [4, 3, 2, 1]
deque.removeFirst();
deque.printAll();       // [3, 2, 1]
deque.removeFirst();
deque.printAll();       // [2, 1]
deque.removeFirst();
deque.printAll();       // [1]
deque.removeFirst();
deque.printAll();       // []
console.log(`isEmpty: ${deque.isEmpty()}`);
console.log("\n");

console.log("===== addLast =====");
deque.addLast(1);
deque.addLast(2);
deque.addLast(3);
deque.addLast(4);
deque.addLast(5);
deque.printAll();       // [1, 2, 3, 4, 5]
console.log(`isEmpty: ${deque.isEmpty()}`);
console.log("\n");

console.log("===== removeLast =====");
deque.removeLast();
deque.printAll();       // [1, 2, 3, 4]
deque.removeLast();
deque.printAll();       // [1, 2, 3]
deque.removeLast();
deque.printAll();       // [1, 2]
deque.removeLast();
deque.printAll();       // [1]
deque.removeLast();
deque.printAll();       // []
console.log(`isEmpty: ${deque.isEmpty()}`);

