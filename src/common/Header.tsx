import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export const Header = ({
  title,
  goBack,
}: {
  title: string;
  goBack?: boolean;
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.backBtn}
        onPress={() => navigation.goBack()}>
        <Image
          source={
            goBack
              ? require('../../assets/images/back.png')
              : require('../../assets/images/menu.png')
          }
          resizeMode="cover"
          style={styles.backImage}
        />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export const BackHeader = ({
  title,
  goBack,
}: {
  title: string;
  goBack?: boolean;
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.backBtn}
        onPress={() => navigation.goBack()}>
        <Image
          source={
            goBack
              ? require('../../assets/images/back.png')
              : require('../../assets/images/menu.png')
          }
          resizeMode="cover"
          style={styles.backImage}
        />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};
