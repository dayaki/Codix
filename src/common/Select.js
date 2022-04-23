import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import BottomOverlay from 'react-native-raw-bottom-sheet';

// interface SheetProps {
//   height: number;
//   openRef: any;
//   title: string;
//   useName: string;
//   useLabel: string;
//   showLabel?: boolean;
//   data: {}[];
//   onSelect: () => undefined;
// }

export const SelectSheet = ({
  height = 599,
  openRef,
  title,
  data,
  useName,
  showLabel,
  useLabel,
  onSelect,
}) => {
  const [searchText, setSearchText] = useState('');
  const [items, setItems] = useState(data);

  useEffect(() => {
    if (searchText !== '') {
      const filter = data.filter(el =>
        el[useName].toLowerCase().includes(searchText.toLowerCase()),
      );
      setItems(filter);
    }
    // return () => {
    //   setItems({});
    // };
  }, [searchText, data]);

  const handleClose = () => {
    setSearchText('');
  };

  return (
    <BottomOverlay
      ref={openRef}
      height={height}
      duration={300}
      onClose={handleClose}
      animationType="fade"
      customStyles={{
        container: styles.container,
      }}>
      <View style={styles.select}>
        <View styles={styles.header}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.selectBtn}
            onPress={() => openRef.current.close()}>
            <Image
              source={require('../../assets/images/close.png')}
              resizeMode="cover"
              style={styles.closeImg}
            />
            {/* <Cancel color="#464646" size={40} /> */}
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.search}>
          {/* <Search style={styles.searchIcon} /> */}
          <TextInput
            placeholder="Search"
            style={styles.input}
            value={searchText}
            onChangeText={text => setSearchText(text)}
            importantForAutofill="no"
            autoComplete="off"
            autoCorrect={false}
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {items &&
            items.map((item, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.7}
                onPress={() => {
                  onSelect(item);
                  openRef.current.close();
                }}
                style={styles.selectView}>
                <Text style={styles.selectViewTitle}>{item[useName]}</Text>
                {showLabel && (
                  <Text style={styles.selectViewLabel}>{item[useLabel]}</Text>
                )}
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </BottomOverlay>
  );
};

// export const SelectView = ({ onPress, title, label }) => (
//   <TouchableOpacity
//     activeOpacity={0.7}
//     onPress={onPress}
//     style={styles.selectView}>
//     <TitleText title={title} style={styles.selectViewTitle} />
//     {label && <Text style={styles.selectViewLabel}>{label}</Text>}
//   </TouchableOpacity>
// );

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // backgroundColor: 'rgba(209, 209, 209,0.5)',
    paddingVertical: 30,
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  closeImg: {
    width: 16,
    height: 16,
  },
  select: {},
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  selectBtn: {
    position: 'absolute',
    width: 40,
    height: 40,
    left: -10,
    top: -10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 15,
    alignSelf: 'center',
  },
  search: {
    borderRadius: 5,
    backgroundColor: 'rgba(83,85,90,0.10)',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  searchIcon: {
    position: 'absolute',
    left: 1,
  },
  input: {
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 12,
    color: 'blue',
    opacity: 0.8,
    paddingLeft: 10,
    backgroundColor: 'transparent',
    width: '100%',
    height: 40,
    marginTop: 4,
  },
  selectView: {
    paddingVertical: 20,
    borderBottomColor: 'rgba(83,85,90,0.3)',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  selectViewTitle: {
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 12,
  },
  selectViewLabel: {
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 10,
    color: 'blue',
    opacity: 0.4,
  },
});
