import React from 'react'
import MenuRow from './components/MenuRowComponent';
import UnitRow from './components/UnitRowComponent';
import './App.css';



{/*TODO:
- Make menuItem buttons toggle view of category MenuRow
- Make arrows scroll through items max 3 or 4 (rendering when within screen)
- fix remove row (including arrows) when row empty
- fix css styling*/}

class App extends React.Component {

  constructor(props) {
    super(props);
    const data = this.props.data;
    const categories = [];

    for (let i in data) {
      if(!categories.includes(data[i].category)){
        categories.push(data[i].category);
      }
    }

    const itemsByCategory = categories.map(() => []);

    for (let i in categories) {
      const categoryName = categories[i]
      itemsByCategory[i] = data.filter(item =>
      item.category === categoryName); }

    this.state = {data: {}};
    for(let i in categories) {
      this.state.data[categories[i].toLowerCase()] = itemsByCategory[i];
    }
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem(itemId) {
    console.log(this.state.data);
    console.log('itemId: ', itemId);
    const data = this.state.data;

    for(let category in data) {
      for(let item in data[category]) {
        if(data[category][item].id === itemId){
          console.log(data[category][item]);
        }
      }
    }
  }

  render() {
    const data = this.state.data;
    const categories = Object.keys(data);

    const unitRows = categories.map(category =>
      <UnitRow items={data[category]}
               key={category}
               removeItem={this.removeItem} />
    );

    return(
      <div className="container">
        <MenuRow data={this.state.data} />
        {unitRows}
      </div>
    );
  }
}

export default App;
