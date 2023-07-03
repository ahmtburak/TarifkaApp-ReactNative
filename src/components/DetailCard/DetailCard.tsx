import React from 'react';
import {Image, View, Text, Pressable, Linking} from 'react-native';
import styles from './DetailCard.style';

const DetailCard = ({detail}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: detail.strMealThumb}} />
      <View style={styles.inner_container}>
        <Text style={styles.meal_title}>{detail.strMeal}</Text>
        <Text style={styles.area_title}>{detail.strArea}</Text>
        <View style = {styles.horizontal_line}></View>
        <Text style = {styles.instructions_text}>{detail.strInstructions}</Text>
        <Pressable style = {styles.button} onPress={() => Linking.openURL(detail.strYoutube)} >
            <Text style = {styles.button_title}>Watch on Youtube</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DetailCard;
