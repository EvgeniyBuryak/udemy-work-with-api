import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
//import yelp from '../api/yelp';  
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    console.log(results);
    const filterResultsByDisctrict = (id) => {
        /**
         * "vacancies": [
             {
                  "contact": {
                        "address": "Новосибирск, Заельцовский район, Красный проспект, 79",        
                        "district": {
                            "id": 253189,
                            "title": "Заельцовский"
                        }
                    }
              }
         */
        // 253189 -> Заельцовский
        // "id": 253196, "title": "Центральный"
        // "id": 253193, "title": "Октябрьский"
        
        return results.filter(result => {
            //console.log(result.contact.district.id === id);
            return result.contact?.district?.id === id;
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
        <ResultsList results={filterResultsByDisctrict(253189)} title="Район Заельцовский"/>
        <ResultsList results={filterResultsByDisctrict(253196)} title="Район Центральный"/>
        <ResultsList results={filterResultsByDisctrict(253193)} title="Район Октябрьский"/>
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