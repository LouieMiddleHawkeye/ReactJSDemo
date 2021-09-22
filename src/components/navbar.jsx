import React, { Component } from "react";

// Stateless Functional Component
// const NavBar = (props) => {}

// NOTE can destructure props to just get what you need
// const NavBar =({ totalCounters }) => {}

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">
          Navbar{" "}
          <span className="badge bg-secondary">{this.props.totalCounters}</span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
