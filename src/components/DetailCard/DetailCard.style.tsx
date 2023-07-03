import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  inner_container: {
    padding: 5,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
  },
  meal_title: {
    color: '#a52a2a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  area_title: {
    color: '#a52a2a',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  instructions_text: {
    color: 'black',
    fontSize:15,
  },
  horizontal_line: {
    borderBottomColor: '#bdbdbd',
    borderBottomWidth: 1,
  },
  button:{
    margin: 10,
    padding: 5,
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 5,
  },
  button_title: {
    padding: 5,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
