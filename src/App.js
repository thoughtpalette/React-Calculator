import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CalculatorComponent } from './components/calculator/calculator-comp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CalculatorComponent />
      </div>
    );
  }
}

export default App;
