import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    const { containerStyle } = styles;
    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        margin: 5,
        shadowColor: '#dddddd',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 1,
        borderColor: '#dddddd',
        marginTop: 10,
        marginBottom: 5,
        borderWidth: 1,
        borderBottomWidth: 0,
    }
};

export { Card };
