import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import zpRu  from '../api/zp.ru.api';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    // console.log(result);

    const getResult = async (id) => {
        const response = await zpRu.get('', {
            params: {
                vacancy_id: id,
            }
        });
        setResult(response.data);
    };

    useEffect(()=> {
        getResult(id);
    }, []);
    // <Text>${result?.vacancies?.header}</Text>
     return (
        <View>
            <Text>Results Show</Text>
            
        </View>
     );
};

const style = StyleSheet.create();

export default ResultsShowScreen;