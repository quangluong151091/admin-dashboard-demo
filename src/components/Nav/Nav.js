import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-faded rounded navbar-toggleable-md">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#containerNavbar" aria-controls="containerNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="/">Admin Panel</a>
          <div className="collapse navbar-collapse" id="containerNavbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Category</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Detail</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
export default Nav;
