import React, { Fragment, useState } from "react";

const PassForm = (props) => {
  const [account, inserAccount] = useState("");
  const [password, inserPassword] = useState("");
  const getInsert_onchange = (e) => {
    inserAccount(e.target.value);
  };
  const getInsertPassword_onchange = (e) => {
    inserPassword(e.target.value);
  };
  const btnClick = (e) => {
    e.preventDefault();
    alert([account, password]);
  };
  return (
    <Fragment>
      <form className="form">
        <h5>Form</h5>
        <div>
          <label>Account :</label>
          <input type="text" value={account} onChange={getInsert_onchange} />
        </div>

        <div>
          <label>Password :</label>
          <input
            type="text"
            value={password}
            onChange={getInsertPassword_onchange}
          />
        </div>

        <div>
          <button className="btn btn-primary" onClick={btnClick}>
            {props.submit}
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default PassForm;
