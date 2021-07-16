import logo from "./logo.svg";
import React, { useState } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [{ status, message }, setStatus] = useState({});
  const TestBackend = () => {
    axios.get(`http://localhost:3300/api/test`).then((res) => {
    console.log(res.data);  
    let {status, message } = res.data;
    setStatus({status, message});
    });
  };

  return (
    <div className="App">
      <h1> Hello World again! </h1>
      <small> Click the button to change the current status </small> <br />{" "}
      <br /> <br />
      {status === undefined ? (
        <strong> No status </strong>
      ) : (
        <strong> {`status: ${status} - message: ${message}`} </strong>
      )}
      <button onClick={() => TestBackend()}> Test Backend </button>
    </div>
  );
}

export default App;
