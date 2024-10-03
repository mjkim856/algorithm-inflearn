import { Stack } from "./Stack.mjs";

let stack = new Stack();

console.log("===== 첫 번째 출력 =====")
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop());
/*  Node {
    data: 4,
    next: Node { data: 3, next: Node { data: 2, next: [Node] } }
    }                                                         */
console.log(stack.pop().data);      // 3
console.log(stack.pop().data);      // 2
console.log(stack.pop().data);      // 1
// console.log(stack.pop().data);      Cannot read properties of null (reading 'data')
console.log();

console.log("===== 두 번째 출력 =====")
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.peek().data);      // 4
stack.pop()
console.log(stack.peek().data);      // 3
console.log(`isEmpty: ${stack.isEmpty()}`);      // false
stack.pop() 
stack.pop() 
stack.pop() 
console.log(`isEmpty: ${stack.isEmpty()}`);      // true
console.log(stack.pop());