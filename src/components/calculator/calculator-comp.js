import React, { Component } from 'react';
import { ValueDisplayComponent } from '../value-display/value-display-comp';
import { OperatorButtonComponent } from '../operator-button/operator-button-comp';
import { ClearButtonComponent } from '../clear-button/clear-button-comp';
import { NumericButtonComponent } from '../numeric-button/numeric-button-comp';
import './calculator-comp.css';

export class CalculatorComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initialLoad: true,            
            isNewValue: false,
            equationsToRun: '',
            displayValue: 0
        };    

        this.operators = ["+", "-", "/", "*", "="];

        this.addNumberToDisplay = this.addNumberToDisplay.bind(this);
        this.resetTotal = this.resetTotal.bind(this);
        this.addOperator = this.addOperator.bind(this);
    }
    
    calculateSum = () => {
        this.setState((prevState) => {
            const operatorLastInput = this.operatorLastInput();
            if (operatorLastInput) {
                const updatedEquation = prevState.equationsToRun.slice(0, -1);
                const updatedTotal = eval(updatedEquation);

                return {
                    equationsToRun: updatedEquation + "=",
                    displayValue: updatedTotal
                }
            } else {
                const updatedTotal = eval(prevState.equationsToRun);

                return {
                    displayValue: updatedTotal
                }
            }
        });
    }
    
    addNumberToDisplay = (number) => {
        this.setState((prevState) => {
            let displayVal = this.checkForInputState(number);

            return {
                equationsToRun: prevState.equationsToRun + number,
                displayValue: displayVal,
                initialLoad: false
            }
        })
    }

    checkForInputState(number) {
        if (this.state.initialLoad) {
            return number;
        } else if (this.operatorLastInput()) {
            return number;
        } else {
            return '' + this.state.displayValue + number;
        }
    }

    operatorLastInput() {
        const lastEquationChar = this.state.equationsToRun.substr(-1);   

        if (this.operators.includes(lastEquationChar)) {
            return true;
        } else {
            return false;
        }
    }

    addOperator = (operator) => {
        if (operator === "=") {
            this.calculateSum();
            return;
        }

        // Quick transform
        if (operator === "%") { operator = "/"; }

        this.setState((prevState) => {
            let updatedTotal;

            if (prevState.equationsToRun !== "") {
                
                const operatorLastInput = this.operatorLastInput();
                let updatedTotal;
                // Remove previous operator or run into eval errors.
                let updatedEquation;

                if (operatorLastInput) {
                    updatedEquation = prevState.equationsToRun.slice(0, -1);
                    updatedTotal = eval(updatedEquation);                    
                } else {
                    updatedTotal = eval(prevState.equationsToRun);
                }

                return  {
                    equationsToRun: operatorLastInput ? updatedEquation + operator : prevState.equationsToRun + operator,
                    displayValue: updatedTotal
                }                
            } else {
                return {
                    equationsToRun: prevState.displayValue + operator,
                    display: prevState.displayValue
                }
            }
        });
    }

    resetTotal = () => {
        this.setState({
            equationsToRun: '',
            initialLoad: true,
            displayValue: 0
        });
    }

    render() {
        return (
            <div className="calculator">
                <ValueDisplayComponent total={this.state.displayValue} />
                <ClearButtonComponent textContent="clear" resetTotal={this.resetTotal} /> 
                <OperatorButtonComponent operator="%" addOperator={this.addOperator} />
                <NumericButtonComponent number="7" addNumberToDisplay={this.addNumberToDisplay} />
                <NumericButtonComponent number="8" addNumberToDisplay={this.addNumberToDisplay} />
                <NumericButtonComponent number="9" addNumberToDisplay={this.addNumberToDisplay} />
                <OperatorButtonComponent operator="-" addOperator={this.addOperator} />
                <NumericButtonComponent number="4" addNumberToDisplay={this.addNumberToDisplay} />
                <NumericButtonComponent number="5" addNumberToDisplay={this.addNumberToDisplay} />
                <NumericButtonComponent number="6" addNumberToDisplay={this.addNumberToDisplay} />                
                <OperatorButtonComponent operator="+" addOperator={this.addOperator} />
                <NumericButtonComponent number="1" addNumberToDisplay={this.addNumberToDisplay} />
                <NumericButtonComponent number="2" addNumberToDisplay={this.addNumberToDisplay} />
                <NumericButtonComponent number="3" addNumberToDisplay={this.addNumberToDisplay} />
                <OperatorButtonComponent operator="=" addOperator={this.addOperator} />
            </div>
        );
    }
}

export default CalculatorComponent;