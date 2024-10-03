class Node {
    constructor(data, next = null) {
        // 현재 데이터를 가진 data와 다음 노드의 정보를 가진 next 변수를 가지고 있다. 
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    // 아하 이제 이해함!! Node의 헤드가 아니라, 이 LinkedList의 생성자이고 LinkedList의 헤드를 뜻하는 것임.
    constructor() {
        this.head = null;
        this.count = 0;
    }

    // 리스트 원소 출력 함수
    printAll() {
        let currentNode = this.head;
        let text = "["

        while(currentNode != null) {
            text += currentNode.data;
            currentNode = currentNode.next;

            if(currentNode != null) {
                text += ", "
            }
        }
        text += "]"
        console.log(text)
    }

    // 리스트 비우는 함수
    clear() {
        this.head = null;
        this.count = 0;
    }

    // 원하는 인덱스에 데이터를 삽입하는 함수
    // 삽입할 위치 뜻하는 index와 삽입할 데이터를 뜻하는 data를 가지고 있다. 
    insertAt(index, data) {
        if(index > this.count || index < 0) {
            // count가 리스트의 범위를 넘어가는 경우 에러처리 (음수거나, length를 넘거나 ... )
            throw new Error("Index out of bounds");
        }   

        // 새로 삽입할 노드 생성
        let newNode = new Node(data);

        // 리스트의 가장 앞에 노드를 넣는 경우
        if (index == 0) {
            // 근데 넥스트가 헤드를 가리키면 안 되는 거 아닌가...? 헤드 다음을 가리켜야 하는 거아닌가...?
            // >> 요 헤드는 지금의 헤드이다 ... 즉 a b c 인데 z를 맨 앞에 넣고 싶다면, 현재 맨 앞인 a의 head 값을 z의 next에 설정하는 것.
            // 그리고 새로운 노드(z)를 head에 넣는 것 
            newNode.next = this.head;
            this.head = newNode;
            // 리스트의 가장 앞부분을 제외하고 노드를 넣는 경우
        } else {
            // 현재 리스트의 헤드 확인
            let currentNode = this.head;

            // index번째에 data를 넣고 싶다고 하는 것이므로 index - 1 까지 순서를 반복한다. 
            for(let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
                // a b c d << z를 3에 넣고 싶다
                // i = 0 >> a.next를 currentNode에 넣는다. 
                // i = 1 >> b.next를 currentNode에 넣는다. 
                // i = 2 >> c.next를 currentNode에 넣는다. 멈춤
                // currentNode.next를 currentNode에 넣고, newNode를 currentNode.next에 넣는다.
            }
            // 새로운 노드는 currentNode의 next를 가리킨다
            newNode.next = currentNode.next;
            // currentNode의 next는 새로운 노드를 가리킨다
            currentNode.next = newNode;
        }
        this.count++;
    }

    // 리스트의 맨 마지막에 data를 추가하는 함수. 차피 맨 뒤라 data만 필요하당
    insertLast(data) {
        this.insertAt(this.count, data);
    }

    // 리스트 요소 삭제하는 함수. 인덱스만 있음 삭제 가능해서 data는 필요 없당
    // 연결을 끊음으로서 삭제라고 이해하면 될 듯
    deleteAt(index) {
        if(index >= this.count || index < 0) {
            throw new Error("Index out of bounds");
        }

        let currentNode = this.head;

        // head 노드 삭제
        if(index == 0) {
            // 삭제할 노드의 값을 딜리트노드에 담음 (왜인진 모르겠는데 아마 값을 프린트해서 보기 위함인 듯)
            let deleteNode = this.head;
            // 현재 헤드 노드에 다음 노드의 next를 담음
            this.head = this.head.next;
            // 하나 줄어든 거니까 카운트 1 제거
            this.count--;
            return deleteNode;
        // n번째 노드 삭제
        } else {
            /*
            a b c d e
            0 1 2 3 4

            여기서 3번째 노드를 삭제한다고 하면 
            index - 1 까지 for문을 돌려서 currentNode = currentNode.next를 설정한다
            이 경우 index 2(c)까지의 next는 그대로 유지한다
            현 노드의 다음 (삭제하고자하는 d(3)).next.next를 통해 다음과 같이 리스트 연결을 수정한다

            as-is : 0(a) - 1(b) - 2(c) - 3(d) - 4(e)      
            to-be : 0(a) - 1(b) - 2(c) - 4(e)           >> 2 > 4로 잇는다
            
            */
            for(let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            let deleteNode = currentNode.next;
            currentNode.next = currentNode.next.next;
            this.count--;
            return deleteNode;
        }
    }

    // 리스트의 마지막 요소를 삭제하는 함수
    deleteLast() {
        return this.deleteAt(this.count - 1);
    }

    // 리스트의 원하는 인덱스 값을 읽어오는 함수
    getNodeAt(index) {
        if(index >= this.count || index < 0) {
            throw new Error("Index out of bounds");
        }

        let currentNode = this.head;
        for(let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
        
    }

    
}

export { Node, LinkedList } ;