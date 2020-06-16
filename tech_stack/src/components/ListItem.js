import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut();
    }
    renderDescription() {
        const { library, expanded } = this.props;
        const { descriptionTextStyle } = styles;
        if (expanded) {
            return (
                <CardSection>
                    <Text style={descriptionTextStyle}>
                        {library.description}
                    </Text>
                </CardSection>

            );
        }
    }

    render() {
        console.log(this.props);
        const { titleTextStyle } = styles;
        const { library } = this.props;
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    this.props.selectLibrary(this.props.library.id);
                }}
            >
                <View>
                    <CardSection>
                        <Text style={titleTextStyle}>
                            {library.title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
const styles = {
    titleTextStyle: {
        fontSize: 18,
        paddingLeft: 10
    },
    descriptionTextStyle: {
        fontSize: 14,
        paddingLeft: 10,
        paddingRight: 10
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        expanded: state.selectedLibraryId === ownProps.library.id
    };
};

export default connect(mapStateToProps, actions)(ListItem);
