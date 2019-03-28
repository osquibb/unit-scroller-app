import React, { Component } from 'react';
import MenuItem from './MenuItemComponent';

class MenuRow extends Component {

  render() {
    const menuItems = this.props.categories.map(category =>
    <MenuItem category = {category}
              key = {category} />)

    return(
      <div className="row align-items-center">
        {menuItems}
      </div>
    );
  }
}

export default MenuRow;
