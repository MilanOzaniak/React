import React, {Component} from 'react';

export default class NumberInput extends Component{
    render(){
        return(
            <label htmlFor="x">
                Prve čislo:
                <input id="x" type="number" name="x" required value="0"/>
            </label>
        );
    }
}