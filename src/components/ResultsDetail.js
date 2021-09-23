import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultaDetail = ({ result }) => {    
    return (
        <View style={styles.container}>
            
            <Text style={styles.header}>{result.header}</Text>
            <Text style={styles.companyTitle}>{result.company.title}</Text>
            <Text>Salary min: {result.salary_min_rub} max: {result.salary_max}</Text>
        </View>
    );
};
// <Image style={styles.image} source={{ uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png' }} />
const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    header: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    companyTitle: {
        fontSize: 11,
        color: 'gray',
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
    },

});

export default ResultaDetail;