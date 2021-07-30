import React, { useState, useEffect } from "react";
import getDataFromLS from "../service/getData";

const EditFormFieldMode = () => {
  // array of objects state
  const [allDescriptions, setAllDescriptions] = useState(getDataFromLS());

  //input field states
  const [descriptions, setDescriptions] = useState(
    "To be included as part of the Adult"
  );

  const backEdit = () => {
    window.location = "./editmode";
  };

  // form submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    let description = { descriptions };
    setAllDescriptions([...allDescriptions, description]);
    console.log(description);
  };

  //saving data to local storage
  useEffect(() => {
    localStorage.setItem("descriptions", JSON.stringify(descriptions));
  }, [descriptions]);

  return (
    <div>
      <nav className="heading">
        <button onClick={backEdit} className="buttonRight">
          Back
        </button>
        Enter Description <button className="buttonLeft">OK</button>
      </nav>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setDescriptions(e.target.value)}
          value={descriptions}
          required
        />
      </form>
    </div>
  );
};

export default EditFormFieldMode;
