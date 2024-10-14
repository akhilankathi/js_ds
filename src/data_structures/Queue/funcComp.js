const { useState } = require("react");

const QueueDataStructure = () => {
  // first in first out
  const [queue, setQueue] = useState([]);

  const enQueue = (item) => {
    setQueue([...queue, item]);
  };
  const deQueue = () => {
    let updatedQueue = [...queue];
    updatedQueue.shift();
    setQueue(updatedQueue);
  };
  const firstItem = () => {
    return queue[0];
  };
  const size = () => {
    return queue.length;
  };
  const isEmpty = () => {
    return queue.length === 0;
  };
  const allItems = () => {
    return queue;
  };

  return (
    <div>
      {" "}
      <button onClick={() => enQueue("Item" + queue.length)}>Push</button>
      <button onClick={deQueue}>Pop</button>
      <p>first element in queue: {firstItem()}</p>
      <p>Is the queue empty: {isEmpty().toString()}</p>
      <p>quque length: {size()}</p>
      {allItems().map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};
export default QueueDataStructure;
