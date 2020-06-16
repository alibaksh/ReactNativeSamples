import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import { Header, Spinner } from './common';

class App extends Component {
  state = { loggedIn: null };

  componentDidMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyA2p3RTCn_iQC-0s5iCACNLUN1fbZbvU5s',
        authDomain: 'testauth-1ca15.firebaseapp.com',
        databaseURL: 'https://testauth-1ca15.firebaseio.com',
        projectId: 'testauth-1ca15',
        storageBucket: '',
        messagingSenderId: '469278755648',
        appId: '1:469278755648:web:7b351958704aafa2b3c8a5'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderLandingPage() {
    switch (this.state.loggedIn) {
      case true:
          return <Dashboard />;
      case false:
          return <LoginForm />;
      default:
          return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header title='Authentication' />
        { this.renderLandingPage() }
      </View>
    );
  }
}

export default App;
