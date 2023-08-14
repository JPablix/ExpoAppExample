import React from 'react';
import { View, StyleSheet } from 'react-native';

const DayCard = () => {
  return <View style={styles.DayCard} />;
};

const styles = StyleSheet.create({
    DayCard: {
        width: 150,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        
    },
});

export default DayCard;