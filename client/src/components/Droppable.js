import React, { useState, useEffect } from "react";
import { Droppable } from "react-beautiful-dnd";
import Validator from "./Validator";

const DroppableArea = ({ category, validators }) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <Droppable droppableId={`${category}`}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {validators.map((validator, index) => (
            <Validator key={validator.id} validator={validator} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DroppableArea;
