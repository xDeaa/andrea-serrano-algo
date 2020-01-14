const Stack = require("./Stack");

function enqueue(item, stack) {
    stack.items.push(item)
}

function dequeue(stack) {
    if (this.items.length === 0) {
        console.log("Stack already empty");
    }
    stack.items.shift()
}

const stack = new Stack();
enqueue("Andrea", stack)
enqueue("Test", stack)
enqueue("Serrano", stack)
console.log(stack.items);
dequeue(stack)
console.log(stack.items);
dequeue(stack)
dequeue(stack)
dequeue(stack)
