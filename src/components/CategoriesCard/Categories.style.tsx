import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa500',
  },
  inner_container: {
    margin:5,
    backgroundColor: '#eceff1',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    overflow: 'hidden',

  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    color:'black',
  },
});
