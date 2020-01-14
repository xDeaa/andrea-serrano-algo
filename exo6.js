const LinkedList = require("./LinkedList")
const Node = require("./Node")

function getNode(index, list) {
    if (index < 0 || index > list.length || list.length === 0) {
        return null;
    }

    if (index === 0 )  {
        return list.head;
    }

    let current = list.head;
    for(let i = 0; i< index; i++) {
        current = current.next;
    }
    
    console.log(current);
    return current;
}


const myList = new LinkedList();
const values = ['Andrea', 'Basil', 'Cedric', 'Damien', 'Andrea'];
values.forEach(value => {
    const node = new Node(value)
    myList.appendToTail(node);    
});

myList.printNodes();
getNode(2, myList)