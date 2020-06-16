import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    const { containerStyle } = styles;
    return (
        <View style={[containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        backgroundColor: '#ffffff',
        justifyContent: 'flex-start',
        borderColor: '#dddddd',
        borderWidth: 1,
        borderBottomWidth: 1,
        flexDirection: 'row',
        position: 'relative'
    }
};

export { CardSection };
