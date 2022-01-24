import React, { Component } from "react";
import NumberInput from './NumberInput';
import OperationSelect from "./OperationSelect";

export default class CalculatorForm extends Component{
    render(){
        return (
            <form className="CalculatorForm">
                <NumberInput/>
                <NumberInput/>
                <OperationSelect/>
                <input type="submit" value="spočitaj"/>
            </form>
        );
    }
}