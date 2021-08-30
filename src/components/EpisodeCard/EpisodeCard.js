import React from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import styles from './EpisodeCardStyle'

const ProductCard = ( props ) => {
    const { air_date, created, episode, name, url, characters } = props;
    
    return (
        <View>
            <View style={styles.container} >
                
                <Text>{name}</Text>
                <Text>{episode}</Text>
                <Text>{created}</Text>
                <Text>{air_date}</Text>
                <Text>{url}</Text>
                
            </View>
        </View>
    );
};
export default ProductCard;