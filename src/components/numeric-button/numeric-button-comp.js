import React, { Component } from 'react';

export class NumericButtonComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <button onClick={() => this.props.addNumberToDisplay(this.props.number)}>{this.props.number}</button>;
    }
}

export default NumericButtonComponent;