const LinkedList = require("./LinkedList")
const Node = require("./Node")

// method do in linkedList
const myList = new LinkedList();
const values = ['Andrea', 'Basil', 'Cedric', 'Damien', 'Emilie'];
values.forEach(value => {
    const node = new Node(value)
    myList.appendToTail(node);    
});
myList.printNodes();
myList.deleteNode(3);
const newNode = new Node("Andrea");
myList.appendToTail(newNode)
myList.printNodes();

