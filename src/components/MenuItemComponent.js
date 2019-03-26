import React, { Component } from 'react';

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.menuItemClassName = "col-sm text-white bg-info text-center rounded";
    this.menuItemStyle = {margin: '0 10px 10px', padding: '10px'};
  }

  render() {
    return(
      <div className={this.menuItemClassName}
            style={this.menuItemStyle}>
        {this.props.category}
      </div>
    );
  }
}

export default MenuItem;
