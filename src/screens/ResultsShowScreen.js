import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import zpRu  from '../api/zp.ru.api';

const ResultsShowScreen = ({ navigation }) => {
    const [results, setResults] = useState([]);
    const id = navigation.getParam('id');

    const getResult = async () => {
        const response = await zpRu.get();
        setResults(response.data.vacancies);
    };

    const filterResultsByVacancies = (id) => {        
        return results.filter(result => {            
            return result?.publication?.vacancy_id === id;
        });
    };

    const keyExtractor = useCallback((item) => item.id.toString(), []);

    const renderItem = useCallback(({ item }) => {        
        return (
            <View>
                <Text>Вакансия: {item.header}</Text>
                <Text>Район: {item.contact.district.title}</Text>
            </View>
            )
    }, []); 

    useEffect(()=> {
        getResult(id);
    }, []);

    return (
    <View>
        <FlatList
            scrollEnabled={false}
            data={filterResultsByVacancies(id)}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
        />
    </View>
    );
};

const style = StyleSheet.create();

export default ResultsShowScreen;