import React from 'react';
import {View, Text, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import FoodsCard from '../../components/FoodsCard/FoodsCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Foods = ({route, navigation}) => {
  const {strCategory} = route.params;
  const {loading, data, error} = useFetch(
    Config.API_CATEGORY_URL + strCategory,
  );
  const handleFoodSelect = idMeal => {
    navigation.navigate('Detail', {idMeal});
  };

  const renderFoods = ({item}) => (
    <FoodsCard food={item} onSelect={() => handleFoodSelect(item.idMeal)} />
  );
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View>
      <FlatList data={data.meals} renderItem={renderFoods} />
    </View>
  );
};

export default Foods;
