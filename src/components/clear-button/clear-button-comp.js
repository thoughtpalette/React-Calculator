import React, { Component } from 'react';
import './clear-button-comp.css';

export class ClearButtonComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <button className="clear-btn" onClick={this.props.resetTotal}>{this.props.textContent}</button>;
    }
}

export default ClearButtonComponent;