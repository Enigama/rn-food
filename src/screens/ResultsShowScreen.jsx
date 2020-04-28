import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import { useRoute } from '@react-navigation/native';
import yelp from "../api/yelp";

const ResultsShowScreen = () => {
  const [result, setResult ] = useState(null);
  const route = useRoute();

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(route.params.id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
          return <Image style={style.image} source={{uri: item}}/>
        }}
      />
    </View>
  )
};
const style = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  }
});

export default ResultsShowScreen;
