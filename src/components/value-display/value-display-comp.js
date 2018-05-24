import React, { Component } from 'react';
import './value-display-comp.css';

export class ValueDisplayComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ value: nextProps.total });
    }

    render() {
        return <input type="text" value={this.state.value}></input>;
    }
}

export default ValueDisplayComponent;