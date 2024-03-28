import React, { useState } from "react";

function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    const value = e.target.name;
    if (value === '=') {
      calculate();
    } else if (value === 'AC') {
      clear();
    } else if (value === '%') {
      calculatePercentage();
    } else if (value === '+/-') {
      changeSign();
    } else {
      setResult(prevResult => prevResult + value);
    }
  };

  const clear = () => {
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(eval(result.replace(/÷/g, '/').replace(/×/g, '*')).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const calculatePercentage = () => {
    try {
      setResult((eval(result.replace(/÷/g, '/').replace(/×/g, '*')) / 100).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const changeSign = () => {
    if (result !== "") {
      setResult(prevResult => (parseFloat(prevResult) * -1).toString());
    }
  };


  return (
    <div className="calculator">
      <input type="text" value={result} />
      <div className="container">
        <div className="keypad">
          <div className="row">
            <button className="btn dark" onClick={clear} id="ac">
              AC
            </button>
            <button
              className="btn dark"
              onClick={handleClick}
              name="%"
              id="percentage"
            >
              %
            </button>
            <button
              className="btn"
              onClick={handleClick}
              name="+/-"
              id="plus-minus"
            >
              +/-
            </button>
            <button className="btn operator" onClick={handleClick} name="/" id="divide">
              &divide;
            </button>
          </div>
          <div className="row">
            <button className="btn number" onClick={handleClick} name="7">
              7
            </button>
            <button className="btn number" onClick={handleClick} name="8">
              8
            </button>
            <button className="btn number" onClick={handleClick} name="9">
              9
            </button>
            <button
              className="btn operator"
              onClick={handleClick}
              name="*"
              id="multiply"
            >
              &times;
            </button>
          </div>
          <div className="row">
            <button className="btn number" onClick={handleClick} name="4">
              4
            </button>
            <button className="btn number" onClick={handleClick} name="5">
              5
            </button>
            <button className="btn number" onClick={handleClick} name="6">
              6
            </button>
            <button
              className="btn operator"
              onClick={handleClick}
              name="-"
              id="subtract"
            >
              &minus;
            </button>
          </div>
          <div className="row">
            <button className="btn number" onClick={handleClick} name="1">
              1
            </button>
            <button className="btn number" onClick={handleClick} name="2">
              2
            </button>
            <button className="btn number" onClick={handleClick} name="3">
              3
            </button>
            <button className="btn operator" onClick={handleClick} name="+" id="add">
              +
            </button>
          </div>
          <div className="row">
            <button className="btn number " onClick={handleClick} name="0" id="zero">
              0
            </button>
            <button className="btn number" onClick={handleClick} name="." id="decimal">
              .
            </button>
            <button className="btn operator" onClick={calculate}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
