import React, { useState } from "react";

function Text(props) {
  const [text, setText] = useState(null);

  function handleOnClick() {
    let newstate = text.toUpperCase();
    setText(newstate);
    props.showAlert("Convert to Uppercase!", "success");
  }

  function handleOnChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <div className="container">
        <div
          className="container"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          <h1>{props.heading}</h1>
        </div>

        <textarea
          className="form-control"
          value={text}
          id="my-box"
          rows="8"
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#495057" : "white",
            color: props.mode === "light" ? "black" : "white",
          }}
          placeholder="Enter the text"
        ></textarea>
        <button type="button" class="btn btn-primary" onClick={handleOnClick}>
          to upper case
        </button>
      </div>
    </div>
  );
}

export default Text;
