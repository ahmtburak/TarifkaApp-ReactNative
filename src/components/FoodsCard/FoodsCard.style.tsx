import {StyleSheet, Dimensions} from 'react-native';
const phoneHeight = Dimensions.get('screen').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa500',
  },
  inner_container:{
    margin: 10,
  },
  title_container: {
    flex: 1,
    height: 40,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    bottom: 0,
    padding: 3,
  },
  image: {
    width: '100%',
    height: phoneHeight / 4,
    borderRadius: 10,
  },
  title: {
    textAlign: 'right',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});
