import React from 'react';
import { View, StyleSheet } from 'react-native';

const ReviewCard = () => {
  return <View style={styles.ReviewCard} />;
};

const styles = StyleSheet.create({
  ReviewCard: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: 10,
  },
});

export default ReviewCard;
