import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
            <Text style={styles.buttonTextStyle}>{children}</Text>  
      </TouchableOpacity>
    );
};

const styles = {
    buttonTextStyle:{
        color: '#007aff',
        fontSize: 16,
        alignSelf: 'center',
        fontWeight: '600',
        paddingLeft: 10,
        paddingRight: 10,
        padding: 5
    },
    buttonStyle: {
        backgroundColor: '#ffffff',
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        margin: 5
    }
}
export default Button;