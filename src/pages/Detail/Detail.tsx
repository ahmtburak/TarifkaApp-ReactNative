import React from 'react';
import {View, Text, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';
import DetailCard from '../../components/DetailCard/DetailCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Detail = ({route}) => {
  const {idMeal} = route.params;
  const {loading, error, data} = useFetch(Config.API_FOOD_URL + idMeal);
  const renderDetail = ({item}) => <DetailCard detail={item} />;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  
  return (
    <View>
      <FlatList data={data.meals} renderItem={renderDetail} />
    </View>
  );
};
export default Detail;
