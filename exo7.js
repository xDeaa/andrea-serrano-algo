const Stack = require("./Stack");

function pushItemStack(item, stack) {
    stack.items.push(item)
}

function popItemStack(stack) {
    if (stack.items.length == 0) {
        console.log("Stack already empty");
    }
    stack.items.pop()
}
const stack = new Stack();
pushItemStack("Andrea", stack)
pushItemStack("Test", stack)
pushItemStack("Serrano", stack)
console.log(stack.items);
popItemStack(stack)
popItemStack(stack)
console.log(stack.items);
popItemStack(stack)
popItemStack(stack)
