import React, { useState } from "react";
import Navbar from "./components/navbar";
import Text from "./components/text";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  function changeMode() {
    if (mode === "light") {
      setmode("dark");
      document.body.style.background = "#011923";
      showAlert("Dark Mode is enable successfully", "success");
    } else {
      setmode("light");
      document.body.style.background = "white";
      showAlert("Light Mode is enable successfully", "success");
    }
    // setInterval(() => {
    //   document.title = "MyTextutils";
    // }, 1500);
    // setInterval(() => {
    //   document.title = "Great Website";
    // }, 3000);
  }

  return (
    <Router>
      <Navbar title="MY-APP" mode={mode} changemode={changeMode} />
      <Alert alert={alert} />

      {/* <div className="my-2"> */}
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <Text
              showAlert={showAlert}
              heading="Enter the text to analyze"
              mode={mode}
            />
          </Route>
        </Switch>
      {/* </div> */}

    </Router> 
  );
}

export default App;
