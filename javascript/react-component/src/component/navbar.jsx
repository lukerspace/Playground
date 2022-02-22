import React, { Component } from "react";

// Class_componet

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <div>
//           <a className="navbar-brand" href="#">
//             Items
//             <button className="btn-success btn m-2">{this.props.total}</button>
//           </a>
//         </div>
//       </nav>
//     );
//   }
// }

//Stateless function component
// need to pass the props into the simple stateless function component ? sfc+TAB

const NavBar = ({ total }) => {
  return (
    //   destructure  props argument
    <nav className="navbar navbar-light bg-light">
      <div>
        <a className="navbar-brand" href="#">
          Items
          <button className="btn-success btn m-2">{total}</button>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
