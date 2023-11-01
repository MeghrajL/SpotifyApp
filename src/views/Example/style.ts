import { Colors } from '@/theme/Variables';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bgImg: { flex: 1, width: '100%', height: '68%' },
  mainView: { paddingTop: '70%' },
  logo: { height: 60, width: 60 },
  text: {
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
  },

  btnsContainer: {
    width: '100%',
    paddingTop: '5%',
  },
  spotifyBtn: {
    backgroundColor: Colors.green200,
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 50,
    width: '90%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  btntext: {
    color: 'black',
    fontSize: 18,
  },
});
