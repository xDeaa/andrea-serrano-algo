class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // exo 4
    appendToTail(node) {
        if (this.head === null) {
        this.head = node;
        this.tail = node;
        this.length++;
        return node;
    } 
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    // exo 4
    deleteNode(index) {
        if (index < 0 || index > this.length - 1 || this.length === 0)  {
            return null;
        }

        if (index === 0) {
            const nodeToDelete = this.head;
            this.head = this.head.next;
            this.length--;
            return nodeToDelete;
        }

        let current = this.head;
        let previous;

        for(let i= 0; i<index; i++) {
            previous = current;
            current = current.next;
        }

        const nodeToDelete = current;
        previous.next = current.next;

        if(previous.next === null) {
            this.tail = previous;
        }

        this.length--;
        return nodeToDelete;
    }

    printNodes() {
        const nodes = [];
        let current = this.head;      

        while (current) {
            nodes.push(current.data);
            current = current.next;
        }

        console.log(nodes.join(' -> '));
        return nodes.join(' -> ');
    }
}

module.exports =  LinkedList;
  