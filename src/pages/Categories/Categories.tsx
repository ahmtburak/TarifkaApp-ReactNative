import React from 'react';
import {View, Text, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import CategoriesCard from '../../components/CategoriesCard/';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Categories = ({navigation}) => {
  const {loading, data, error} = useFetch(Config.API_URL);

  const handleCategorySelect = strCategory => {
    navigation.navigate('Foods', {strCategory});
  };

  const renderCategories = ({item}) => (
    <CategoriesCard
      category={item}
      onSelect={() => handleCategorySelect(item.strCategory)}
    />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View>
      <FlatList data={data.categories} renderItem={renderCategories} />
    </View>
  );
};

export default Categories;
