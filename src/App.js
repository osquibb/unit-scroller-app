import React from 'react'
import MenuRow from './components/MenuRowComponent';
import UnitRow from './components/UnitRowComponent';
import './App.css';

{/*TODO:
- fix:  when you scroll all the way forward
and delete a unit, only one remains visible*/}

class App extends React.Component {

  constructor(props) {
    super(props);

    {/* Encapsulate setting of state in a function?*/}

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
    this.removeCategory = this.removeCategory.bind(this);
  }

  removeItem(itemId) {
    const data = this.state.data;

    for(let category in data) {
      for(let idx in data[category]) {
        if(data[category][idx].id === itemId){

          this.setState(state => {
            state.data[category] =
            state.data[category]
            .filter(item => item.id !== itemId);

            return {data: state.data};
          });
        }
      }
    }
  }

  removeCategory(category) {
    const data = this.state.data;

    for(let cat in data) {

      if(cat === category) {
        this.setState(state => {
          delete state.data[category];

          return {data: state.data};
        });
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
        <MenuRow data={this.state.data}
                 removeCategory={this.removeCategory}/>
        {unitRows}
      </div>
    );
  }
}

export default App;
