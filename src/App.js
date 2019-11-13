import React from "react";
import "./App.css";
// import Counters from "./components/counters";
import Counter from "./components/counter";

function App() {
  const counters = [
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 5 },
    { id: 4, value: 1 }
  ];

  return (
    <div className="App">
      {/* <Counters counters={counters} /> */}
      <Counter counterArray={counters} />
    </div>
  );
}

export default App;
