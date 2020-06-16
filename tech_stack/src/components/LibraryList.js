import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
    renderRow(library) {
        return (
            <ListItem library={library} />
        );
    }

    render() {
        const { libraries } = this.props;
        return (
            <FlatList
                data={libraries.data}
                renderItem={({ item }) => this.renderRow(item)}
                keyExtractor={(item) => item.id.toString()}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        libraries: state.libraries
    };
};

export default connect(mapStateToProps)(LibraryList);
