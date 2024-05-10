import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [input, setInput] = useState(0);
  const handleadd = () => {
    if (input === 0) {
      let add = value + 1;
      setValue(add);
    } else {
      let add = value + input;
      setValue(add);
    }
  };
  const handlesub = () => {
    if (input === 0) {
      let sub = value - 1;
      setValue(sub);
    } else {
      let sub = value - input;
      setValue(sub);
    }
  };
  return (
    <div className="App">
      <h1>Counter</h1>
      <div style={{ fontSize: "30px", fontWeight: "bold" }}>{value}</div>
      <div className="main-container">
        <button className="button" onClick={handleadd}>
          +
        </button>
        <button className="button" onClick={handlesub}>
          -
        </button>
        <input
          type="number"
          value={input}
          style={{ height: "30px" }}
          onChange={(e) => setInput(parseInt(e.target.value))}
        ></input>
      </div>
    </div>
  );
}

export default App;
