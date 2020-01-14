class Stack {
    constructor() {
        this.items  = [];
    }

    push(item) {
        this.items.push(item)
    }

    isEmpty() {
        if (this.items.length === 0) {
            console.log("Stack already empty");
        }
        return false
    }
  };

  module.exports =  Stack;
