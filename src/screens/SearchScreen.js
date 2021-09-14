import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
//import yelp from '../api/yelp';  
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
      <View>
        <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We have found {results.length} results</Text>
        <ResultsList title="Cost Effective"/>
        <ResultsList title="Bit Pricier"/>
        <ResultsList title="Big Spender"/>
        <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={results}
            renderItem={({ item }) => {
                return <View>
                    <Text style={styles.titleSize}>
                        {item.header}
                    </Text>
                </View>
            }}
        />
      </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;