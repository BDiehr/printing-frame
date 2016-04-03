import React, { Component } from 'react';
import PrintFrame from './PrintFrame';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Frame Example</h1>
        <PrintFrame>
          <h2>Inside of the iframe</h2>
        </PrintFrame>
      </div>
    );
  }
}
