import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({ album }) => {
    // eslint-disable-next-line camelcase
    const { title, artist, thumbnail_image, image, url } = album;
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle} source={{ uri: 'https://ios-trffc.pulse.weatherbug.net/media/trffc/v2/img/small?system=weatherbug-stream&id=403778&key=7f4878712a7ce186e14c0e22dc4d9946c99187232da4babf3d92e29e5f2aa152&rate=10000' }} />
                </View>
                <View style={styles.cardHeaderTextStyle}>
                    <Text style={styles.titleTextStyle}>{ title }</Text>
                    <Text>{ artist }</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={styles.imageViewStyle} source={{ uri: image }} />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    titleTextStyle: {
        fontSize: 18
    },
    imageViewStyle: {
        width: '100%',
        height: 300
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    cardHeaderTextStyle: {
        justifyContent: 'space-around'
    }
};
export default AlbumDetails;