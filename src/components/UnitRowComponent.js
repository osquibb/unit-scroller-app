import React, { Component } from 'react';
import Unit from './UnitComponent';
import Arrow from './ArrowComponent';

class UnitRow extends Component {

  render() {
    const units = this.props.items.map(
      item => <Unit title={item.title}
                    text={item.text}
                    selected={item.selected}
                    key={item.title} />);
    return (
      <div className="row">
        <Arrow direction="left" display={true}/>
        {units}
        <Arrow direction="right" display={true}/>
      </div>
    );
  }
}

export default UnitRow;
