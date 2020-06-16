import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Card, CardSection, Spinner } from './common';

class Dashboard extends Component {

    onLogoutPressed() {
        firebase.auth().signOut();
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Button onPress={this.onLogoutPressed.bind(this)}>
                        Logout
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default Dashboard;