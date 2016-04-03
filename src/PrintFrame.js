import React from 'react';
import Frame from 'react-frame-component';

const P_KEY_DOWN = 80;

class PrintFrame extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handlePrint = this.handlePrint.bind(this);
    this.triggerPrint = this.triggerPrint.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handlePrint);
    window.addEventListener('keydown', this.handlePrint);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handlePrint);
    window.removeEventListener('keydown', this.handlePrint);
  }

  handlePrint(event) {
    console.log('handeling event');
    if((event.ctrlKey || event.metaKey) && event.keyCode == P_KEY_DOWN){
      this.triggerPrint();
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    }
  }

  triggerPrint() {
    const frame = document.getElementById('print-frame').contentWindow;
    frame.focus();
    frame.print();
    if (this.props.afterPrint != null) {
      this.props.afterPrint();
    }
  }

  render() {
    return (
      <Frame id="print-frame">
        {this.props.children}
      </Frame>
    )
  }
}

export default PrintFrame;