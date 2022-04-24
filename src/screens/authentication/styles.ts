import React from 'react';
import { StyleSheet } from 'react-native';

const spacing = [0, 4, 8, 12, 16, 24, 32, 48, 64];

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 90,
  },
  logo: {
    alignSelf: 'center',
    marginVertical: 24,
    maxWidth: '100%',
    marginTop: 100,
    width: 200,
    height: 60,
  },
  appName: {
    fontFamily: 'NotoSans-Bold',
    fontSize: 18,
    color: '#fff',
    alignSelf: 'center',
    marginTop: 30,
    paddingHorizontal: spacing[4],
    // marginBottom: 100,
  },
  scroll: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 1,
    padding: 20,
    borderWidth: 4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: '#FFFFFF',
  },
  loginText: {
    color: 'rgba(0,0,0,0.9)',
    fontFamily: 'NotoSans-Bold',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputWrapper: {
    marginTop: 30,
  },
  label: {
    color: 'rgba(0,0,0,0.8)',
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 14,
    marginBottom: 6,
  },
  input: {
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 13,
    borderRadius: 6,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1,
    height: 50,
    paddingLeft: 10,
    color: '#000',
  },
  forgotPass: {
    color: 'red',
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 14,
    paddingVertical: 20,
    alignSelf: 'flex-end',
    marginTop: spacing[0],
    marginBottom: 30,
  },
  btn: {
    backgroundColor: '#051C5C',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing[4],
    borderRadius: spacing[1],
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
});
