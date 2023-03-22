import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Validator = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            className="val-container"
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              border: snapshot.isDragging
                ? "1.5px solid white"
                : "1.5px solid transparent",
              ...provided.draggableProps.style,
            }}
          >
            <div className="logo-box">
              <img src={item.logo} className="vlogo" alt="logo" />
              <h2>{item.name}</h2>
            </div>
            <div className="vinfo">
              <div className="vinfo-power">
                <h2>{item.power}</h2>
              </div>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Validator;
