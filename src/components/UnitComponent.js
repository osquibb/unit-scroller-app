import React, { Component } from 'react';

class Unit extends Component {
  constructor(props) {
    super(props);
    this.unitClassName = "col-sm text-secondary border text-center rounded";
    this.unitStyle = {margin: '15px 20px', padding: '30px'};

    {/*Move this state to App?*/}
    this.state = {selected: this.props.selected};
    this.removeUnit = this.removeUnit.bind(this);
  }

  removeUnit(e) {
    this.setState({selected: false});
  }

  render() {
    if (this.state.selected) {
      return(
        <div className={this.unitClassName}
              style={this.unitStyle}>
          <h4>{this.props.title}</h4>
          <p>{this.props.text}</p>
          <button onClick={this.removeUnit}>remove</button>
        </div>
      );
    } else {
      return null;
    }

  }
}

export default Unit;
