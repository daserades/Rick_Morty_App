import React from 'react';
import { Text, View,Button } from 'react-native';

const SecondPage = ({navigation}) => {
    return (
        <View>
            <Text>
                SecondPage
            </Text>
            <Button title="ThirdPage" onPress={() => navigation.navigate('ThirdPage')} />
            <Button title="go back firstPage" onPress={ () => navigation.navigate('FirstPage')}/>
        </View>
    );
}

export  {SecondPage};