import React from 'react';
import {View, Image, TouchableWithoutFeedback, Text} from 'react-native';
import styles from './FoodsCard.style';

const FoodsCard = ({food, onSelect}) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.inner_container}>
          <Image style={styles.image} source={{uri: food.strMealThumb}} />
          <View style={styles.title_container}>
            <Text style={styles.title}>{food.strMeal}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default FoodsCard;
