import React, { Component } from "react";

class ActionMode extends Component {
  
  handleClick = () => {
    window.location = "/";
  };

  editClick = () => {
    window.location = "/editmode";
  };
  render() {
    return (
      <div>
        <nav>
          <button onClick={this.handleClick} className="buttonRight">
            Back
          </button>
          Document Menu
        </nav>
        <div className="hint">
          Below are the options available for this document
        </div>
        <div className="sub-heading">Menu Options</div>
        <button onClick={this.editClick} className="buttonDown">
          Edit
        </button>
      </div>
    );
  }
}

export default ActionMode;
