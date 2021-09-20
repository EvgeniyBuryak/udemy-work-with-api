import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultaDetail = ({ result }) => {
    return (
        <View style={styles.main}>
            <Text style={styles.title}>{result.company.title}</Text>
            <Text style={styles.header}>{result.header}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        margin: 5
    },
    title: {
        fontSize: 18,
    },
    header: {
        color: 'gray'
    }
});

export default ResultaDetail;