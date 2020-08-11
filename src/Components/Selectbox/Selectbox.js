import React from "react";

const getOptions = data => {
  return data.map((item, index) => (
    <option key={index} value={item.label}>
      {item.label}
    </option>
  ));
};
function Selectbox({ id, label, name, data, changeHandler }) {
  return (
    <div className="form-group">
      <label htmlFor={id} className="font-weight600">
        {label}
      </label>
      <select
        className="form-control"
        name={name}
        id={id}
        onChange={changeHandler}
      >
        {getOptions(data)}
      </select>
    </div>
  );
}

export default Selectbox;
