import React from "react";
import "./App.css";
import Counters from "./components/counters";
// import Counter from "./components/counter";

function App() {

  return (
    <div className="App">
      <Counters  />
      {/* <Counter counterArray={counters} /> */}
    </div>
  );
}

export default App;
