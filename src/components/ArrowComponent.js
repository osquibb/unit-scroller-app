import React, { Component } from 'react';
import { Card, CardBody, Button } from 'reactstrap';

class Arrow extends Component {

  render() {
    const arrowText = this.props.direction === "left" ? "<" : ">";

    if (this.props.display) {
        return(
          <div className="mx-auto col-12 col-sm-4 col-md-3 col-lg-2">
            <Card className="m-2 border-0">
              <CardBody className="text-center">
                <Button onClick={this.props.onClick}>{arrowText}</Button>
              </CardBody>
            </Card>
          </div>
        );
      } else {
        return (
          <div className="mx-auto col-12 col-sm-4 col-md-3 col-lg-2">
            <Card className="m-2 border-0">
              <CardBody className="text-center">
                <div></div>
              </CardBody>
            </Card>
          </div>
        );
      }
  }
}

export default Arrow;
