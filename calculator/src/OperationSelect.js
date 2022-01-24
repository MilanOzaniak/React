import React, {Component} from 'react';

export default class OperationSelect extends Component{
    render(){
        return(
            <label htmlFor="operation">
                Operacia:
                <select id="operation" name="operation" required value="">
                    <option value="">--Vyberte operaciu--</option>
                    <option value="add">Sčitanie</option>
                </select>
            </label>
        );
    }
}