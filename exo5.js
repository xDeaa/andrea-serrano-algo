const LinkedList = require("./LinkedList")
const Node = require("./Node")

function removeDuplicate(list) {
    let current = list.head;      
    let previous;
    let nodeDuplicate;

     while (current && current.next) 
     { 
         previous = current; 
         while (previous.next) 
         { 
             if (current.data == previous.next.data) { 
                 nodeDuplicate = previous.next; 
                 
                 
                 previous.next = previous.next.next; 
             } 
             else {  previous = previous.next; }
         } 
         current = current.next; 
     } 
}

function mapCharacters(string) {
    const characters = {}
    for(let i=0; i<string.length; i++) {
        characters[string[i]] = characters[string[i]] + 1 || 1;
    }

    return characters;
}


// removeDuplicate(LinkedList)
const myList = new LinkedList();
const values = ['Andrea', 'Basil', 'Cedric', 'Damien', 'Andrea'];
values.forEach(value => {
    const node = new Node(value)
    myList.appendToTail(node);    
});

myList.printNodes()
removeDuplicate(myList)
myList.printNodes()
