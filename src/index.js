import React, { useState } from "react";
import ReactDOM from "react-dom";
const App = () => {
  const [enterData, setEnterData] = useState("");
  const handleCalculation = (data) => {
    const finalValue = enterData + data;
    setEnterData(finalValue);
  };
  const handleCancelCalculation = () => {
    setEnterData("");
  };
  const handleEvalCalculation = () => {
    const total = eval(`${enterData}`);
    setEnterData(total);
  };
  const handleDeleteCalculation = () => {
    const sliceData = enterData.toString().slice(0, -1);
    setEnterData(sliceData);
  };
  return (
    <div className="parent-container">
      <div className="grid-container">
        <div className="grid-item input-control">
          <input className="input-container" value={enterData} />
        </div>
        <div className="grid-item key-control" onClick={() => handleCalculation(7)}>
          7
        </div>
        <div className="grid-item key-control" onClick={() => handleCalculation(8)}>
          8
        </div>
        <div className="grid-item key-control" onClick={() => handleCalculation(9)}>
          9
        </div>
        <div className="grid-item key-control" onClick={handleDeleteCalculation}>
          DEL
        </div>
        <div className="grid-item key-control" onClick={() => handleCalculation(4)}>
          4
        </div>
        <div className="grid-item key-control" onClick={() => handleCalculation(5)}>
          5
        </div>
        <div className="grid-item key-control" onClick={() => handleCalculation(6)}>
          6
        </div>
        <div
          className="grid-item key-control"
          onClick={() => handleCalculation(`+`)}
        >
          +
        </div>
        <div className="grid-item key-control" onClick={() => handleCalculation(1)}>
          1
        </div>
        <div className="grid-item key-control" onClick={() => handleCalculation(2)}>
          2
        </div>
        <div className="grid-item key-control" onClick={() => handleCalculation(3)}>
          3
        </div>
        <div
          className="grid-item key-control"
          onClick={() => handleCalculation(`-`)}
        >
          -
        </div>
        <div
          className="grid-item key-control"
          onClick={() => handleCalculation(`.`)}
        >
          .
        </div>
        <div className="grid-item key-control" onClick={() => handleCalculation(0)}>
          0
        </div>
        <div
          className="grid-item key-control"
          onClick={() => handleCalculation(`/`)}
        >
          /
        </div>
        <div
          className="grid-item key-control"
          onClick={() => handleCalculation(`*`)}
        >
          *
        </div>
        <div className="grid-item button-left" onClick={handleCancelCalculation}>
          RESET
        </div>
        <div className="grid-item button-right" onClick={handleEvalCalculation}>
          =
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
