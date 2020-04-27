import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';

const ResultDetail = ({result}) => {
  return (
    <View style={style.container}>
      <Image style={style.image} source={{ uri: result.image_url }}/>
      <Text style={style.name}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
};

const style = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    marginBottom: 5,
    borderRadius: 8
  },
  name: {
    fontWeight: 'bold',
  }
});

export default ResultDetail;
