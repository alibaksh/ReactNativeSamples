import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', errorMessage: '', loading: false };

    onLoginPressed() {
        const { email, password } = this.state;
        this.setState({ errorMessage: '', loading: true });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFailed.bind(this));
            });
    }

    onLoginFailed() {
        this.setState({
            errorMessage: 'Authentication Failed.',
            loading: false
        });
    }

    onLoginSuccess() {
        console.log('onLoginSuccess');
        this.setState({
            email: '',
            password: '',
            errorMessage: '',
            loading: false
        });
    }

    renderLoginButton() {
        if (this.state.loading) {
            return (
                <Spinner
                    size='small'
                    spinnerText='Loading, Please wait...'
                />
            );
        }
        return (
            <Button onPress={this.onLoginPressed.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder='user@gmail.com'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        label='Email'
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder='password'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        label='Password'
                    />
                </CardSection>
                <Text style={styles.errorMessageStyle}>
                    {this.state.errorMessage}
                </Text>
                <CardSection>
                    {this.renderLoginButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorMessageStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
}
export default LoginForm;
