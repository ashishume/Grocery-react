import React from "react";

const RenderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="field">
    <label>{label}</label>
    <div>
      {type === "number" ? (
        <input {...input} type={type} min={0} />
      ) : (
        <input {...input} type={type} />
      )}

      {touched && error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  </div>
);

export default RenderField;
