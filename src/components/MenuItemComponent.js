import React, { Component } from 'react';
import { Button } from 'reactstrap';

class MenuItem extends Component {

  render() {
    const category = this.props.category;

    return(
      <div className="col-12 col-sm-4 text-center mb-3">

        <Button className="btn-block"
                color="primary"
                size="large"
                onClick={() =>
                this.props.removeCategory(category)}>

          {category.toUpperCase()} (click to remove)

        </Button>
      </div>
    );
  }
}

export default MenuItem;
