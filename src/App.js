import React from 'react'
import ReactDOM from 'react-dom'
import MenuRow from './components/MenuRowComponent';
import UnitRow from './components/UnitRowComponent';
import './App.css';
import { DATA } from './shared/data';

{/*TODO:
- Make menuItem buttons toggle view of category MenuRow
- Make arrows scroll through items max 3 or 4 (rendering when within screen)
- fix remove row (including arrows) when row empty
- fix styling*/}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: DATA
    };
  }

  render() {
    const categories = [];
    for (let i in this.state.data) {
      if(!categories.includes(this.state.data[i].category)){
        categories.push(this.state.data[i].category);
      }
    }

    const itemsByCategory = categories.map(() => []);

    for (let i in categories) {
      const categoryName = categories[i]
      itemsByCategory[i] = this.state.data.filter(item =>
      item.category === categoryName);
    }

    return(
      <div className="container">
        <MenuRow categories={categories} />

        <UnitRow category={categories[0]}
                 items={itemsByCategory[0]} />

        <UnitRow category={categories[1]}
                 items={itemsByCategory[1]} />

        <UnitRow category={categories[2]}
                 items={itemsByCategory[2]} />

      </div>
    );
  }
}

export default App;
