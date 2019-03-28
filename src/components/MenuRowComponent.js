import React, { Component } from 'react';
import MenuItem from './MenuItemComponent';

class MenuRow extends Component {

  render() {
    const data = this.props.data;
    const categories = Object.keys(data);

    const menuItems = categories.map(category =>
    <MenuItem category ={category}
              key ={category} />)

    return(
      <div className="row align-items-center">
        {menuItems}
      </div>
    );
  }
}

export default MenuRow;
