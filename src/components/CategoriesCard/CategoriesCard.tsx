import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './Categories.style';

const CategoriesCard = ({category, onSelect}) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.inner_container}>
          <Image
            source={{uri: category.strCategoryThumb}}
            style={styles.image}
          />
          <Text style={styles.title}>{category.strCategory}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CategoriesCard;
