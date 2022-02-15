import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingBottom: 10,
  },
  imgRow: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF'
  },

  imgContainer: {
    width: '49%'
  },

  imgSize: {
    width: '100%',
    height: 250,
    marginVertical: 4
  }
});

export default commonStyles;