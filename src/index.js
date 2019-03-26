import React from 'react'
import ReactDOM from 'react-dom'
import './bootstrap.min.css'

{/*TODO:
- Make menuItem buttons toggle view of category MenuRow
- Make arrows scroll through items max 3 or 4 (rendering when within screen)
- fix remove row (including arrows) when row empty
- fix styling*/}

{/*Max 3 categories in view...*/}
const data = [
  {category: "Games", title: "Chess", text: "chess info", selected: true},
  {category: "Games", title: "Checkers", text: "checkers info", selected: true},
  {category: "Games", title: "Solitaire", text: "solitaire info", selected: true},
  {category: "Books", title: "Burmese Days", text: "burmese days info", selected: true},
  {category: "Books", title: "Animal Farm", text: "animal farm info", selected: true},
  {category: "Tricks", title: "1984", text: "1984 info", selected: true},
];

class Pane extends React.Component {

  render() {
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

class MenuRow extends React.Component {

  render() {
    const menuItems = this.props.categories.map(category =>
    <MenuItem category = {category}
              key = {category} />)

    return(
      <div className="row">
        {menuItems}
      </div>
    );
  }
}

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.menuItemClassName = "col-sm text-white bg-info text-center rounded";
    this.menuItemStyle = {margin: '0 10px 10px', padding: '10px'};
  }

  render() {
    return(
      <div className={this.menuItemClassName}
            style={this.menuItemStyle}>
        {this.props.category}
      </div>
    );
  }
}

class UnitRow extends React.Component {

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

class Unit extends React.Component {
  constructor(props) {
    super(props);
    this.unitClassName = "col-sm text-secondary border text-center rounded";
    this.unitStyle = {margin: '15px 20px', padding: '30px'};

    {/*Move this state to Pane?*/}
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

class UnitButton extends React.Component {
  render() {
    return(
      null
    );
  }
}

class Arrow extends React.Component {
  constructor(props) {
    super(props);
    this.arrowClassName = "col-sm text-center";
    this.arrowStyle = {margin: '40px 0', padding: '30px 0'};
  }
  render() {
    if (this.props.display) {
      return(
        <div className={this.arrowClassName}
             style={this.arrowStyle}>
        {this.props.direction === "left" ? '<-' : '->'}
        </div>
      );
    } else {
      return null;
    }
  }
}



ReactDOM.render(
  <Pane data={data} />
  ,
  document.getElementById('root')
);
