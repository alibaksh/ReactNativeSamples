import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { Actions } from 'react-native-router-flux';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDNI7FeALiGY21bFN3S8JgShXhdyN3U9Dc',
      authDomain: 'managerapp-c0530.firebaseapp.com',
      databaseURL: 'https://managerapp-c0530.firebaseio.com',
      projectId: 'managerapp-c0530',
      storageBucket: '',
      messagingSenderId: '899915597741',
      appId: '1:899915597741:web:57d715b6928f98a19ac324'
    };

    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        Actions.main();
      } else {
        Actions.auth();
      }
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
