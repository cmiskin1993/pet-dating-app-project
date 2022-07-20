import React from "react";

const Filters = ({ onChangeType, onPetFilterClick }) => {

    function handleChange(event) {
    onChangeType(event.target.value);
    }

    return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" aria-label="type" onChange={handleChange}>
          <option value="all">all</option>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
      </div>

      <div className="field">
        <button onClick={onPetFilterClick} className="ui secondary button">
          Find pets
        </button>
      </div>
    </div>
  );
}

export default Filters;