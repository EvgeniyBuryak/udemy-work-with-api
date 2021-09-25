import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import zpRu from '../api/zp.ru.api';

const SearchScreen = () => {
    const [term, setTerm] = useState('');    
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    const getResult = async (searchTerm) => {
        try {
            const response = await zpRu.get('', {
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
        getResult();                
    }, []);

    console.log(Array.from(new Set(findAllDistrict.split(','))));

    return (
      <View style={{ flex: 1 }}>
        <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        
        <ScrollView> 
            <ResultsList results={filterResultsByDistrict(253187)} title="Район Дзержинский"/>
            <ResultsList results={filterResultsByDistrict(253196)} title="Район Центральный"/>
            <ResultsList results={filterResultsByDistrict(253188)} title="Район Железнодорожный"/>
            <ResultsList results={filterResultsByDistrict(253193)} title="Район Октябрьский"/>
            <ResultsList results={filterResultsByDistrict(253195)} title="Район Советский"/>
        </ScrollView>

        <Image style={styles.image} source={{ uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png' }} />
      </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 60,
        borderRadius: 4,
        marginBottom: 5,
        marginTop: 5,
    },
});

export default SearchScreen;