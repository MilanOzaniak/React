import React, { useState } from "react";
import CalculatorForm from "./components/CalculatorForm";
import './App.css';

function App(){
  const [titleState] = useState('React kalkulacka');
  const [xState, setXState] = useState(0);
  const [xState, setYState] = useState(0);

  const inputXonchange = (event) =>{
    setXState(event.target.value);
  }

  const inputYonchange = (event) =>{
    setYState(event.target.value);
  }

  return (
    <div className="App">
      <h1>{titleState}</h1>
      <CalculatorForm
        xOnChange = {inputXonchange}
        yOnChange = {inputYonchange}
        x = {xState}
        y = {yState}
        />
    </div>
  )
}



export default App;
