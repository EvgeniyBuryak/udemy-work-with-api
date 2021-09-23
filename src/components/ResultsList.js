import React, { useCallback } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultaDetail from './ResultsDetail';
 
const ResultsList = ({ title, results }) => {

    const keyExtractor = useCallback((item) => item.id.toString(), []);

    const renderItem = useCallback(({ item }) => {
        return <ResultaDetail result={item}/>
    }, []);

    // <Text>Results: {results.length}</Text>

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
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
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
    container: {
        marginBottom: 10,
    }
});

export default ResultsList;
