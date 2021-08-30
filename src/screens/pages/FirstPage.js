import React,{useState,useEffect} from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import axios from 'axios';
import EpisodeCard from './../../components/EpisodeCard/EpisodeCard'

const FirstPage = ({ navigation }) => {
    const [data, setData] = useState([]);
    //const [loading, setLoading] = useState(true);
    //const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const { data } = await axios.get("https://rickandmortyapi.com/api/episode");
            setData(data);
            //setLoading(false);
        } catch (error) {
            setError(error.message);
            //setLoading(false);
        }
    
    };

    useEffect(() => {
    fetchData()
    }, []);

    return (
        <View>
            <Text>
                FirstPage
            </Text>
            <Button title="secondPage" onPress={() => navigation.navigate('SecondPage')} />
            <FlatList
        //ListHeaderComponent={() => (<SearchInput/>)}
        renderItem={({item}) => <EpisodeCard {...item}  />}
        data={data.results}
        keyExtractor={(item, index) => item.id}
      />
        </View>
    );
}

export  {FirstPage};