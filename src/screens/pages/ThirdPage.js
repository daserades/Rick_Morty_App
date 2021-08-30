import React from 'react';
import { Text, View,Button } from 'react-native';

const ThirdPage = ({navigation}) => {
    return (
        <View>
            <Text>
                ThirdPage
            </Text>
            <Button title="go back secondPage" onPress={ () => navigation.navigate('SecondPage')}/>
        </View>
    );
}

export  {ThirdPage};