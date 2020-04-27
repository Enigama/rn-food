import React from 'react';
import {View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return(
    <View style={style.backgroundStyle}>
      <Feather name="search" style={style.iconStyle}/>
      <TextInput
        style={style.input}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit(term)}
      />
    </View>
  )
};

const style = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    marginHorizontal: 15,
    fontSize: 35,
    alignSelf: 'center',
  }
});

export default SearchBar;
