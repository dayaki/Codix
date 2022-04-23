import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { styles } from './styles';

export const Button = ({
  title,
  isLoading,
  onPress,
  style,
}: {
  title: string;
  isLoading?: boolean;
  onPress: () => void;
  style?: {};
}) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={isLoading ? null : onPress}
    style={[styles.button, style]}>
    {isLoading ? (
      <ActivityIndicator size="small" color="#fff" />
    ) : (
      <Text style={styles.buttonText}>{title}</Text>
    )}
  </TouchableOpacity>
);
