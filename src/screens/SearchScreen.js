import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import zpRu from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');    
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    const searchApi = async (searchTerm) => {
        try {
            const response = await zpRu.get('/vacancies', {
                params: {
                    q: searchTerm
                }
            });
            setResults(response.data.vacancies);
            
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    /** 
        "vacancies": [
        {
          "contact": {
            "address": "Новосибирск, Заельцовский район, Красный проспект, 79",        
            "district": {
              "id": 253189,
              "title": "Заельцовский"
            }
          }
        }
        * 253189 -> Заельцовский
        * "id": 253196, "title": "Центральный"
        * "id": 253193, "title": "Октябрьский" 
        */
    const findAllDistrict = results.reduce((allDistricts, result) => {
            return allDistricts + `Districs {id: ${result.contact?.district?.id} title: ${result.contact?.district?.title}},\n`;
    }, '');

    const filterResultsByDistrict = (id) => {
        return results.filter(result => {            
            return result.contact?.district?.id === id;
        });
    };

    useEffect(()=>{
        searchApi();                
    }, []);

    console.log(Array.from(new Set(findAllDistrict.split(','))));

    return (
      <View>
        <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We have found {results.length} results</Text>
        <ScrollView> 
            <ResultsList results={filterResultsByDistrict(253189)} title="Район Заельцовский"/>
            <ResultsList results={filterResultsByDistrict(253196)} title="Район Центральный"/>
            <ResultsList results={filterResultsByDistrict(253193)} title="Район Октябрьский"/>        
        </ScrollView>
      </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;