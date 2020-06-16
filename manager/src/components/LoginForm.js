import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    onLoginPressed() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    onLoginSuccess() {
        console.log('onLoginSuccess');
    }

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    renderLoginButton() {
        if (this.props.loading) {
            return (
                <Spinner
                    size='large'
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

    renderErrorMessage() {
        if (this.props.errorMessage) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorMessageStyle}>
                        {this.props.errorMessage}
                    </Text>
                </View>
            );
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder='user@gmail.com'
                        value={this.props.email}
                        onChangeText={this.onEmailChange.bind(this)}
                        label='Email'
                    />
                </CardSection>
                
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder='password'
                        value={this.props.password}
                        onChangeText={this.onPasswordChange.bind(this)}
                        label='Password'
                    />
                </CardSection>
                
                {this.renderErrorMessage()}
                
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
};

const mapStateToProps = (state) => {
    const { email, password, errorMessage, loading } = state.auth;
    return {
        email,
        password,
        errorMessage,
        loading
    };
};

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser
})(LoginForm);
