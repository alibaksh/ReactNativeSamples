import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const Spinner = ({ size, spinnerText }) => {
    return (
        <View style={styles.spinnerContainerStyle}>
            <ActivityIndicator size={size || 'large'} />
            <Text>{spinnerText}</Text>
        </View>
    );
};

const styles = {
    spinnerContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Spinner };
