import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ResultDetail from "./ResultDetail";

const ResultList = ({title, results}) => {
  const navigation = useNavigation();

  if (!results.length) {
    return null;
  }
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Results Search', { id: item.id, name: item.name })}
            >
              <ResultDetail result={item}/>
            </TouchableOpacity>
          )
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
