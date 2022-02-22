import "./App.css";
import { Fragment, useState } from "react";
import Component from "./Component";
import Prop from "./Prop";
import State from "./State";
import PassForm from "./Form";
import Todolist from "./Todolist.js";
import Home from "./Useeffect";
function App() {
  const data = {
    content: "Google",
    link: "https://www.google.com",
  };
  const sub = "Go";
  return (
    <Fragment>
      <div className="App">
        <h3>myReact</h3>
        <PassForm submit={sub}></PassForm>
        <hr />
        <State></State>
        <Todolist></Todolist>
        <br />
        <Component></Component>
        <Home></Home>
        <Prop image={data.image} content={data.content} link={data.link}></Prop>
      </div>
    </Fragment>
  );
}

export default App;
