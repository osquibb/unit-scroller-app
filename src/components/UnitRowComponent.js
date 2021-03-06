import React, { Component } from 'react';
import Unit from './UnitComponent';
import Arrow from './ArrowComponent';

class UnitRow extends Component {

  constructor(props) {
    super(props);
    this.state = { first: 0,
                   last: 2
                 }
    this.scrollForward = this.scrollForward.bind(this);
    this.scrollBackward = this.scrollBackward.bind(this);
  }

  scrollForward() {
    const nextItem = this.props.items[this.state.last];
    if(nextItem !== undefined) {
      this.setState(state => ({first: state.first + 1}));
      this.setState(state => ({last: state.last + 1}));
    }
  }

  scrollBackward() {
    const nextItem = this.props.items[this.state.first - 1];
    if(nextItem !== undefined) {
      this.setState(state => ({first: state.first - 1}));
      this.setState(state => ({last: state.last - 1}));
    }
  }

  componentDidUpdate() {
    const items = this.props.items;
    const first = this.state.first;
    const last = this.state.last;
    const visibleItems = items.slice(first,last);
    
    if(visibleItems.length < 2 &&
       items.length >= 2) {
         this.scrollBackward();
       }
  }

  render() {
    const items = this.props.items;
    const first = this.state.first;
    const last = this.state.last;
    const visibleItems = items.slice(first,last);

    const units = visibleItems.map(
      item => <Unit title={item.title}
                    text={item.text}
                    selected={item.selected}
                    id={item.id}
                    key={item.id}
                    removeItem={this.props.removeItem} />);
    return (
      <div className="row">
        <Arrow direction="left"
               display={items[first - 1] !== undefined}
               onClick={this.scrollBackward}/>
        {units}
        <Arrow direction="right"
               display={items[last] !== undefined}
               onClick={this.scrollForward} />
      </div>
    );
  }
}

export default UnitRow;
