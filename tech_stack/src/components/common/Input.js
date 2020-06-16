import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputContainerStyle, textInputStyle, inputLabelStyle } = styles;
    return (
        <View style={inputContainerStyle}>
            <Text style={inputLabelStyle}>
                {label}
            </Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                style={textInputStyle}
            />
        </View>
    );
};

const styles = {
    inputContainerStyle: {
        flexDirection: 'row',
        height: 40,
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
    },
    inputLabelStyle: {
        fontSize: 18,
        fontWeight: '600',
        flex: 1
    },
    textInputStyle: {
        width: null,
        height: 25,
        flex: 2,
        fontSize: 18,
        lineHeight: 23,
        borderColor: '#007aff',
        marginLeft: 5
    }
};

export { Input };
