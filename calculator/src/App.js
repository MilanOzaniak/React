import react, { Component } from "react";
import CalculatorForm from "./CalculatorForm";
import result from './result';
import './App.css';

export default class App extends Component{
  render(){
    const title = "react kalk"
    return(
      <div className="App">
        <h1>{title}</h1>
        <CalculatorForm/>
        <result/>
      </div>
    )
  }
}
