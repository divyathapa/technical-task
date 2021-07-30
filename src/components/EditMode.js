import React, { useEffect, useState } from "react";
import { getTypes } from "../service/getTypes";
import getDataFromLS from "../service/getData";

const EditMode = () => {
  const [types, setTypes] = useState([]);
  const [descriptions, setDescriptions] = useState(getDataFromLS());

  const getValues = async () => {
    const values = await getTypes();
    setTypes(values);
  };

  useEffect(() => {
    getValues();
  }, []);

  const editBack = () => {
    window.location = "/actionmode";
  };

  const editField = () => {
    window.location = "/editfield";
  };

  return (
    <div>
      <nav class="heading">
        <button onClick={editBack} className="buttonRight">
          Back
        </button>
        Edit Document
        <button className="buttonLeft">OK</button>
      </nav>
      <div className="hint">Make additions to the document below.</div>
      <div className="sub-heading">Document Information</div>
      <form>
        <label htmlFor="type"> Type</label>
        <select id="type" name="type">
          {types.map((type) => {
            return <option value={type.id}>{type.name}</option>;
          })}
        </select>{" "}
        <hr />
        <label htmlFor="description" onClick={editField} className="toPoint">
          {" "}
          Description
        </label>
        <input type="text" value={descriptions} disabled />
      </form>
      <hr />
    </div>
  );
};
export default EditMode;
