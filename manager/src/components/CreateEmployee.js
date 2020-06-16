import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button, Input, Spinner } from './common';

class CreateEmployee extends Component {
    onValueChange({ prop, value }) {
        this.props.employeeUpdate({ prop, value });
    }

    onCreateEmployeePressed() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    renderCreateButton() {
        if (this.props.loading) {
            return (
                <Spinner
                    size='large'
                    spinnerText='Adding employee, Please wait...'
                />
            );
        }
        return (
            <Button
                onPress={this.onCreateEmployeePressed.bind(this)}
            >
                Create
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
        console.log(this.props.employee);
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Name'
                        placeholder='Jane'
                        value={this.props.name}
                        onChangeText={value => {
                            this.onValueChange(({ prop: 'name', value }));
                        }}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label='Phone'
                        placeholder='555-555-5555'
                        value={this.props.phone}
                        onChangeText={value => {
                            this.onValueChange(({ prop: 'phone', value }));
                        }}
                    />
                </CardSection>

                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={value => this.onValueChange({ prop: 'shift', value })}
                    >
                        <Picker.Item label='Monday' value='mon' />
                        <Picker.Item label='Tuesday' value='tue' />
                        <Picker.Item label='Wednesday' value='wed' />
                        <Picker.Item label='Thursday' value='thu' />
                        <Picker.Item label='Friday' value='fri' />
                    </Picker>
                </CardSection>

                {this.renderErrorMessage()}

                <CardSection>
                    {this.renderCreateButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 10
    },
    errorMessageStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift, createEmployeeFail, loading } = state.employeeForm;
    return { name, phone, shift, createEmployeeFail, loading };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(CreateEmployee);
