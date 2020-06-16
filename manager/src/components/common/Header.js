import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {
    const { textStyle, viewSyle } = styles;
    return (
        <View style={viewSyle}>
            <Text style={textStyle}>{ props.title }</Text>
        </View>
    );
};
const styles = {
    viewSyle: {
        backgroundColor: '#dfdfdf',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 28,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative'
      
    },
    textStyle: {
        fontSize: 23,
    }
};

export { Header };
