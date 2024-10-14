class StackDataStructureClass {
  constructor() {
    this.stack = [];
  }
  push(param) {
    this.stack.push(param);
  }
  pop() {
    return this.stack.pop();
  }
  size() {
    return this.stack.length;
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  allItems() {
    return this.stack;
  }
}

const stackDs = new StackDataStructureClass();

stackDs.push("akhil");
stackDs.push("ajay");
stackDs.push("harish");
stackDs.push("akhil");
stackDs.pop();
console.log(stackDs.size());
console.log(stackDs.isEmpty());
console.log(stackDs.peek());
console.log(stackDs.allItems());
