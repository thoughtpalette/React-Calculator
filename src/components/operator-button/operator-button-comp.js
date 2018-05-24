import React, { Component } from 'react';
import './operator-button-comp.css';

export class OperatorButtonComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <button 
            onClick={() => this.props.addOperator(this.props.operator)}
            className="operator-btn">
            {this.props.operator}
        </button>;
    }
}

export default OperatorButtonComponent;