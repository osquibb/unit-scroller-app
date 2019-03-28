import React, { Component } from 'react';
import { Button } from 'reactstrap';

class MenuItem extends Component {

  render() {
    return(
      <div className="col-12 col-sm-4 text-center mb-3">
        <Button className="btn-block"
                color="primary"
                size="large">
          {this.props.category.toUpperCase()}
        </Button>
      </div>
    );
  }
}

export default MenuItem;
