import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultaDetail = ({ result }) => {    
    return (
        <View style={styles.main}>
            <Image style={styles.image} source={{ uri: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png' }} />
            <Text style={styles.header}>{result.header}</Text>
            <Text style={styles.companyTitle}>{result.company.title}</Text>
            <Text>Salary min: {result.salary_min_rub} max: {result.salary_max}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        margin: 5,
    },
    companyTitle: {
        color: 'gray',
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
    },

});

export default ResultaDetail;