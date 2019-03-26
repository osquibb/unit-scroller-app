import React, { Component } from 'react';

class Arrow extends Component {
  constructor(props) {
    super(props);
    this.arrowClassName = "col-sm text-center";
    this.arrowStyle = {margin: '40px 0', padding: '30px 0'};
  }
  render() {
    if (this.props.display) {
      return(
        <div className={this.arrowClassName}
             style={this.arrowStyle}>
        {this.props.direction === "left" ? '<-' : '->'}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Arrow;
