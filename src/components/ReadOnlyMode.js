import React, { Component, useEffect, useState } from "react";
import getDataFromLS from "../service/getData";

const ReadOnlyMode = () => {
  // Handle click - when you click this button, it should navigate to actionMode.
  const handleClick = () => {
    window.location = "/actionmode";
  };
  const [getValue, setGetValue] = useState(getDataFromLS());

  useEffect(() => {
    getDataFromLS();
  }, []);
  return (
    <div>
      <nav>
        Document Details
        <button onClick={handleClick} className="buttonLeft">
          Actions
        </button>
      </nav>
      <div className="sub-heading">Document Information</div>
      <form>
        <label htmlFor="type"> Type</label>
        <input type="text" value="standard" disabled />
        <hr />
        <label htmlFor="description"> Description</label>
        <input type="text" value={getValue} disabled />
      </form>
      <hr />
    </div>
  );
};

export default ReadOnlyMode;
