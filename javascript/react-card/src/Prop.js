import React, { Fragment } from "react";

const Prop = (props) => {
  return (
    <Fragment>
      <br />
      <div>
        <a href={props.link}>{props.content}</a>
      </div>
      <br />
    </Fragment>
  );
};

export default Prop;
