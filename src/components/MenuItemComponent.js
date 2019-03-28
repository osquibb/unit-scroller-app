import React, { Component } from 'react';
import { Button } from 'reactstrap';

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.menuItemClassName = "col-sm text-white bg-info text-center rounded";
    this.menuItemStyle = {margin: '0 10px 10px', padding: '10px'};
  }

  render() {
    return(
      <div className="col-12 col-sm-4 text-center mb-3">
        <Button className="btn-block"
                color="primary"
                size="large">
          {this.props.category}
        </Button>
      </div>
    );
  }
}

export default MenuItem;
