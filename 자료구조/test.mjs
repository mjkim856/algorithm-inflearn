import { Node, LinkedList } from "./LinkedList.mjs";

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

console.log(node1.data)             // 1
console.log(node1.next.data)        // 2
console.log(node1.next.next.data)   // 3

let list = new LinkedList();

console.log("===== insertAt() 다섯 번 호출 =====")
list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);
list.printAll();        // [0, 1, 2, 3, 4]
console.log()

console.log("===== insertLast() 다섯 번 호출 =====")
list.insertLast(7);
list.insertLast(8);
list.insertLast(9);
list.printAll();        // [0, 1, 2, 3, 4, 7, 8, 9]
console.log()  

console.log("===== clear() 호출 =====")
list.clear();
list.printAll();        // []
console.log()

console.log("===== insertLast() 다섯 번 호출 =====")
list.insertLast(7);
list.insertLast(8);
list.insertLast(9);
list.insertLast(10);
list.insertLast(11);
list.printAll();        // [7, 8, 9, 10, 11]
console.log()

console.log("===== deleteAt(1) 호출 =====")
list.deleteAt(1);
list.printAll();        // [7, 9, 10, 11]
console.log()

console.log("===== deleteLast() 호출 =====")
list.deleteLast()
list.printAll();        // [7, 9, 10]
console.log()

console.log("===== getNodeAt(1) 호출 =====")
let secondNode = list.getNodeAt(1);
console.log(secondNode)     // Node { data: 9, next: Node { data: 10, next: null } }
console.log()