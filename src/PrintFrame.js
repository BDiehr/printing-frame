import React from 'react';
import Frame from 'react-frame-component';
import uuid from 'cuid';

const P_KEY_DOWN = 80;

class PrintFrame extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.frameId = `print-frame-1`;
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
    if((event.ctrlKey || event.metaKey) && event.keyCode == P_KEY_DOWN){
      this.triggerPrint();
      event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    }
  }

  triggerPrint() {
    if (this.props.beforePrint != null) {
      this.props.beforePrint();
    }
    const frame = document.getElementById(this.frameId).contentWindow;
    frame.focus();
    frame.print();
    if (this.props.afterPrint != null) {
      this.props.afterPrint();
    }
  }

  render() {
    return (
      <div style={{ visibility: 'hidden' }}>
        <Frame id={this.frameId}>
          {this.props.children}
        </Frame>
      </div>
    )
  }
}

export default PrintFrame;