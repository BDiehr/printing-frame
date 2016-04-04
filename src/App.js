import React, { Component } from 'react';
import PrintFrame from './PrintFrame';
import { transition } from './d3Visualization';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.copySVG = this.copySVG.bind(this);
    this.setSuccessMessage = this.setSuccessMessage.bind(this);
    this.state = { message: 'Ctrl+P to print!' };
  }

  copySVG() {
    const svg = document.getElementById('chart').cloneNode(true);
    const printContainer = document.getElementById('print-frame-1').contentWindow.document.getElementById('print-container-test');
    printContainer.appendChild(svg);
  }

  setSuccessMessage() {
    const printContainer = document.getElementById('print-frame-1').contentWindow.document.getElementById('print-container-test')
    while (printContainer.firstChild) printContainer.removeChild(printContainer.firstChild);
    this.setState({ message: 'Success!' });
  }

  render() {
    return (
      <div>
        <h1>Frame Example</h1>
        <h3>{this.state.message}</h3>
        <button onClick={transition}>Transition</button>
        <PrintFrame
          beforePrint={this.copySVG}
          afterPrint={this.setSuccessMessage}
          >
          <h1>Printing the SVG</h1>
          <div id="print-container-test" />
        </PrintFrame>
      </div>
    );
  }
}
