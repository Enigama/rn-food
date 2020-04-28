import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    //price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    })
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultList
          results={filterResultsByPrice('$')}
          title="Cost Effective"
        />
        <ResultList
          results={filterResultsByPrice('$$')}
          title="Bit Pricier"
        />
        <ResultList
          results={filterResultsByPrice('$$$$')}
          title="Big Spender"
        />
      </ScrollView>
    </>
  )
};

const style = StyleSheet.create({});

export default SearchScreen;
