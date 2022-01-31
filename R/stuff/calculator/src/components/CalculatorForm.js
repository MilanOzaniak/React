import React, {useState} from "react";
import NumberInput from "./Numberinputs";
import Select from "react-select";
import Result from "./Result";

const CalculatorForm = (props) =>{
    const [selectOptionState, setSelectedOptionState] = useState({
            selectedOption: {
                value: '--vyber operacie--',
                label: '--vyber operacie--',
            }
    })

    const [resultState, setResultState] = useState(null)

    const options = [
        {value: 'ADD', label: 'Scitanie'},
        {value: 'SUBTRACT', label: 'Odcitanie'},
        {value: 'MULTIPLY', label: 'Nasobenie'},
        {value: 'DIVIDE', label: 'Delenie'},
    ]

    const handleSubmit = (event) =>{
        event.preventDefault();
        const result = calculate();
        setResultState(result);
    }

    const handleChange = (selectOptionState) =>{
        setSelectedOptionState({setSelectedOptionState})
    }

    let calculate = () => {
        const {x, y} = props;
        switch(selectOptionState.selectedOption.value){
            case'ADD':
                return parseFloat(x) + parseFloat(y);
            case'SUBTRACT':
                return parseFloat(x) - parseFloat(y);
            case'MULTIPLY':
                return parseFloat(x) * parseFloat(y);
            case'DIVIDE':
                return parseFloat(x) / parseFloat(y);
            default:
                return null;
        }
    }
        

    return(
        <div>
            <from className="CalculatorForm" onSubmit={handleSubmit}>
                <NumberInput 
                    label="Cislo 1"
                    name="cislo1" 
                    OnChange={props.xOnChange}
                    value={props.x}/>
                <NumberInput 
                    label="Cislo 2"
                    name="cislo2"
                    OnChange={props.yOnChange}
                    value={props.y}/>
                <Select 
                    onChange={handleChange}
                    value={selectOptionState.value}
                    options={options}/>
                <input type="submit" value="Spočítajte"/>
            </from>
            <Result x={resultState}/>

        </div>
    )
}

export default CalculatorForm;