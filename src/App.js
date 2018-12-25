import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const liStyle = {
      textAlign: 'left'
    }
    const array = [ 1, 2, 3, 4, 5 ]
    //defined reducer function
    const reducer = (accumulator, currVal) => accumulator + currVal
    return (
      <div className="App">
        <h1>REDUCE callback function</h1>
        <ul style={{width: '50%'}}>
          <li style={liStyle}>our array = [ 1, 2, 3, 4, 5 ]</li>
          <li style={liStyle}>To get total value of the array we use reduce method</li>
          <li style={liStyle}>.reduce() method take a callback function with <br/>two arguments(reducer(or accumulataor) and current value)</li>
          <li style={liStyle}>array.reduce((acc, cV) => acc + cV) = {array.reduce((acc, cV) => acc + cV)}</li>
        </ul>
          <h3>To add initialValue to call back funciton</h3>
          <p>array.reduce((acc, cV) => acc + cV, initialVal)</p>
          <p>array.reduce((acc, cV) => acc + cV, 10) = {array.reduce((acc, cV) => acc + cV, 10)}</p>
        <hr/>
        <h1>REDUCE pre defined function</h1>
        <p>array.reduce(reducer) = {array.reduce(reducer)}</p>
          <h3>To add initialValue to predefined funciton</h3>
          <p>array.reduce(reducer, initialVal)</p>
          <p>array.reduce(reducer, 10) = {array.reduce(reducer, 10)}</p>
      </div>
    );
  }
}

export default App;
