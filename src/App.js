import React, { useEffect, useRef, useState } from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [Value, setValue] = useState("");
  // const inputRef = useRef(null);

  // useEffect(() => inputRef.current.focus());

  const handleChange = (e) => {
    setValue(Value.concat(e.target.value));
  };

  const backspace = () => {
    setValue(Value.slice(0, -1));
  };

  const clear = () => {
    setValue("");
  };

  const calculate = () => {
    try {
      setValue(eval(Value).toString());
    } catch (error) {
      setValue("Error");
    }
  };

  return (
    <section className="App">
      <div className="main">
        <input
          className="form-control form-control-lg mb-2 border border-success border-bottom-10"
          value={Value}
          // ref={inputRef}
        ></input>

        <div className="button-layout">
          <Button className="btn btn-success" value="1" onClick={handleChange}>
            1
          </Button>
          <Button className="btn btn-success" value="2" onClick={handleChange}>
            2
          </Button>
          <Button className="btn btn-success" value="3" onClick={handleChange}>
            3
          </Button>
          <Button className="btn btn-success" value="4" onClick={handleChange}>
            4
          </Button>
          <Button className="btn btn-success" value="5" onClick={handleChange}>
            5
          </Button>
          <Button className="btn btn-success" value="6" onClick={handleChange}>
            6
          </Button>
          <Button className="btn btn-success" value="7" onClick={handleChange}>
            7
          </Button>
          <Button className="btn btn-success" value="8" onClick={handleChange}>
            8
          </Button>
          <Button className="btn btn-success" value="9" onClick={handleChange}>
            9
          </Button>
          <Button className="btn btn-success" value="0" onClick={handleChange}>
            0
          </Button>
          <Button className="btn btn-success" onClick={clear}>
            AC
          </Button>
          <Button className="btn btn-success" onClick={backspace}>
            DEL
          </Button>
          <Button className="btn btn-success" value="+" onClick={handleChange}>
            +
          </Button>
          <Button className="btn btn-success" value="-" onClick={handleChange}>
            -
          </Button>
          <Button className="btn btn-success" value="/" onClick={handleChange}>
            /
          </Button>
          <Button className="btn btn-success" value="*" onClick={handleChange}>
            *
          </Button>
          <Button className="btn btn-success" onClick={calculate}>
            =
          </Button>
        </div>
      </div>
    </section>
  );
}

export default App;
