import React from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';

export const Spinner = ({ visible }: { visible: boolean }) => (
  <>
    {visible && (
      <View style={styles.spinner}>
        <ActivityIndicator size="small" color="#fff" />
        <Text style={styles.spinnerTextStyle}>Please wait...</Text>
      </View>
    )}
  </>
);

const styles = StyleSheet.create({
  spinner: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerTextStyle: {
    color: '#fff',
    marginTop: 20,
    fontSize: 14,
  },
});
