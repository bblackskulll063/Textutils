import React from "react";

function Alert(props) {
  function capitalize(word) {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);  
  }

  return (
    <div style={{height: 50}}>
    {props.alert && (
      <div
        className={`alert alert-${props.alert.type} d-flex align-items-center`}
        role="alert"
      >
        <div>
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      </div>
    )}
    </div>
  );
}

export default Alert;
