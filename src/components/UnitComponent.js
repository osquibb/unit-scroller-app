import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

class Unit extends Component {
  constructor(props) {
    super(props);

    {/*Lift this state to App?*/}
    this.state = {selected: this.props.selected};
    this.removeUnit = this.removeUnit.bind(this);
  }

  removeUnit(e) {
    this.setState({selected: false});
  }

  render() {
    if (this.state.selected) {
      return(
        <div className="mx-auto col-12 col-sm-4 col-md-3 col-lg-2">
          <Card className='m-1'>
            <CardBody className="text-center">
              <CardTitle className="font-weight-bold">
              {this.props.title}
              </CardTitle>
              <CardText>{this.props.text}</CardText>
              <button onClick={this.removeUnit}
                      className="btn btn-warning">
              remove
              </button>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return null;
    }

  }
}

export default Unit;
