import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.8)',
  },
  backBtn: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    position: 'absolute',
    left: 10,
  },
  backImage: {
    width: 20,
    height: 20,
  },
  button: {
    backgroundColor: '#1E1E29',
    borderRadius: 6,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 15,
  },
});
