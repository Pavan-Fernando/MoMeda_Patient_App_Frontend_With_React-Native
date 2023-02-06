import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import axios from 'axios';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    console.warn("GGGGGGGGGGGGGGGGGG");
    try {
      const response = await axios.get('http://192.168.1.4:8085/api/user/1');
      console.log(response.data);
      console.log("testttttttt");
    } catch (error) {
      console.error(error);
    } 
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      <Text>hhhhhhhh</Text>
    </View>
  );
};

export default App;