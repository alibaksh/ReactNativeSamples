import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

const EmployeeItem = ({ employee }) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Actions.createEmployee({ employee });
            }}
        >
            <View>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.itemTitleStyle}>
                        {employee.name}
                    </Text>
                    <Text>
                        {employee.phone}
                    </Text>
                </CardSection>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = {
    itemTitleStyle: {
        fontSize: 18,
        fontWeight: '600',
    }
};

export default EmployeeItem;
