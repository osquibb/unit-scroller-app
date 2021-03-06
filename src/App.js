import React from 'react'
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import './App.css';

const store = ConfigureStore();

const App = (props) => {
    return(
      <Provider store={store}>
        <Main />
      </Provider>
    );
}

export default App;
