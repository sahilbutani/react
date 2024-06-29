import React, { useState } from "react";
import { Draggable, Droppable } from "react-drag-and-drop";

const DragComponent = () => {
  const [droppedItems, setDroppedItems] = useState([]);

  const onDrop = (data) => {
    console.log(data);

    if (data.metal.length !== 0) {
      alert(`Not Drop! Because droppable item is "${data.metal}"`);
    } else {
      const droppedData = data.fruit;
      setDroppedItems([...droppedItems, droppedData]);
    }
  };

  return (
    <div>
      <ul>
        <Draggable type="fruit" data="banana">
          <li>Banana</li>
        </Draggable>
        <Draggable type="fruit" data="Apple">
          <li>Apple</li>
        </Draggable>
        <Draggable type="metal" data="silver">
          <li>Silver</li>
        </Draggable>
      </ul>
      <Droppable types={["fruit", "metal"]} onDrop={onDrop}>
        <ul
          style={{
            height: "200px",
            width: "800px",
            overflow: "scroll",
            background: "#f6f6f6",
          }}
        >
          {droppedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          {droppedItems.length === 0 && "Drag Your Items Here"}
        </ul>
      </Droppable>
    </div>
  );
};

export default DragComponent;
