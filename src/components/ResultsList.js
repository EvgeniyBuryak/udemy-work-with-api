import React, { useCallback } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultaDetail from './ResultsDetail';
 
const ResultsList = ({ title, results }) => {

    const keyExtractor = useCallback((item) => item.id.toString(), []);

    const renderItem = useCallback(({ item }) => {
        return <ResultaDetail result={item}/>
    }, []);

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text>Results: {results.length}</Text>
            <FlatList
                horizontal={true}
                data={results}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList;
