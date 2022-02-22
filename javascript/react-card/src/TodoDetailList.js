import React from "react";

const TodoDetailList = (props) => {
  return (
    <div key={props.id} className="d-flex py-2">
      <div className="me-auto fs-3">{props.text}</div>
      <div>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => props.onDelete(props.id)}
        >
          删除
        </button>
      </div>
    </div>
  );
};

export default TodoDetailList;
