import React, { Component } from 'react';
import { FlatList, View, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import EmployeeItem from './EmployeeItem';
import { fetchEmployeeList } from '../actions';
import { Spinner } from './common';

class EmployeeList extends Component {
    componentDidMount() {
        this.props.fetchEmployeeList();
    }

    wait(timeout) {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    renderRow(employee) {
        return (
            <EmployeeItem employee={employee} />
        );
    }

    renderList() {
        const { isLoading, employees } = this.props;
        
        if (isLoading) {
            return (
                <Spinner
                    size='large'
                    spinnerText='Loading, Please wait...'
                />
            );
        }

        return (
            <FlatList
                data={employees}
                renderItem={({ item }) => this.renderRow(item)}
                keyExtractor={(item) => {
                    return item.key;
                }}
                refreshControl={
                    <RefreshControl
                        colors={['#9Bd35A', '#689F38']}
                        refreshing={this.props.isLoading}
                        onRefresh={() => this.props.fetchEmployeeList()}
                    />
                }
            />
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.renderList()}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { employees, isLoading } = state.employeeList;
    return { employees, isLoading };
};

export default connect(mapStateToProps, { fetchEmployeeList })(EmployeeList);
