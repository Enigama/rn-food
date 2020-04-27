import React from 'react';
import {FlatList, StyleSheet, Text, View } from 'react-native';
import ResultDetail from "./ResultDetail";

const ResultList = ({title, results}) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({item}) => {
          return <ResultDetail result={item} />
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default ResultList;
