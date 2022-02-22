import React, { Fragment, useState } from "react";

const State = () => {
  let [state, setState] = useState("State is Unchanged");
  const btnHandler = (e) => {
    console.log("test");
    setState("State is Changed~");
  };

  return (
    <Fragment>
      <div>{state}</div>
      <button className="btn btn-primary" onClick={btnHandler}>
        ClickChange
      </button>
    </Fragment>
  );
};

export default State;
