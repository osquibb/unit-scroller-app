import React from 'react'
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import './App.css';

const store = ConfigureStore();

class App extends React.Component {

  constructor(props) {
    super(props);
    }

  render() {

    return(
      <Provider store={store}>
        <Main data={this.props.data} />
      </Provider>
    );
  }
}

export default App;
