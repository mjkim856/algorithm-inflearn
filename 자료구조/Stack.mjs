import { LinkedList } from "./LinkedList.mjs";

class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    // 데이터 삽입
    push(data) {
        this.list.insertAt(0, data);
    }

    // 데이터 꺼내기
    pop() {
        try {
            return this.list.deleteAt(0);
        } catch(e) {
            return null;
        }
    }

    // 데이터 확인하기
    peek() {
        return this.list.getNodeAt(0);
    }

    // 스택이 비었는지 확인하기
    isEmpty() {
        return (this.list.count == 0);
    }
}

export { Stack }