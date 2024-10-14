const { useState } = require("react");

const StackDataStructure = () => {
  const [stack, setStack] = useState([]);
  const push = (item) => {
    setStack([...stack, item]);
    return stack;
  };
  const pop = () => {
    let updatedStack = [...stack];
    updatedStack.pop();
    setStack(updatedStack);
  };
  const stacklength = () => {
    return stack.length;
  };
  const peakElement = () => {
    return stack[stack.length - 1];
  };
  const isEmpty = () => {
    return stack.length === 0;
  };
  return (
    <div>
      <button onClick={() => push("Item")}>Push</button>
      <button onClick={pop}>Pop</button>
      <p>Top of the stack: {peakElement()}</p>
      <p>Is the stack empty: {isEmpty().toString()}</p>
      <p>stack length: {stacklength()}</p>
    </div>
  );
};
export default StackDataStructure;
