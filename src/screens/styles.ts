import { StyleSheet } from 'react-native';
import { backgroundColor, labelColor, titleColor } from '../common';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  page_title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 30,
    lineHeight: 36,
    color: titleColor,
  },
  label: {
    color: labelColor,
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 20,
  },
  qrScanner: {
    width: '100%',
    height: 540,
    alignSelf: 'center',
    marginTop: 50,
  },
  backBtn: {
    width: 100,
    paddingVertical: 14,
    paddingHorizontal: 15,
    position: 'absolute',
    left: 8,
  },
  backBtnBlock: {
    // backgroundColor: 'pink',
    width: 60,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginLeft: -10,
  },
  backImage: {
    width: 24,
    height: 24,
  },
  form: {
    marginTop: 30,
  },
  select: {
    marginTop: 30,
  },
  selectTitle: {
    marginBottom: 6,
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
  },
  selectBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'rgba(189, 189, 208,0.3)',
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 10,
  },
  selectLabel: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
  selectImage: {
    width: 16,
    height: 16,
  },
  successImg: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  successTitle: {
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 16,
    lineHeight: 26,
    color: titleColor,
    textAlign: 'center',
    opacity: 0.6,
  },
  successBtn: {
    width: '80%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 60,
  },
  textarea: {
    borderColor: 'rgba(30, 30, 41,0.3)',
    borderWidth: 1,
    textAlignVertical: 'top',
    paddingLeft: 10,
    marginTop: 10,
    borderRadius: 4,
    fontFamily: 'NotoSans-Regular',
    color: titleColor,
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  infoBox: {
    backgroundColor: '#fff',
    borderRadius: 6,
    width: '100%',
    marginTop: 20,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    padding: 10,
  },
  infoBoxLayer: {
    marginBottom: 10,
  },
  infoBoxTitle: {
    fontFamily: 'NotoSans-Bold',
    color: titleColor,
    fontSize: 14,
  },
  infoBoxLabel: {
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 13,
    color: 'rgba(27, 28, 33,0.5)',
    marginTop: -4,
  },
  //   Questions
  questions: {
    // paddingHorizontal: 20,
    paddingTop: 10,
  },
  questionsWrap: {
    borderBottomColor: 'rgba(27, 28, 33,0.2)',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  questionInfo: {
    fontFamily: 'NotoSans-Medium',
    color: '#1E1E29',
    fontSize: 14,
    lineHeight: 20,
    // opacity: 0.8,
  },
  question: {
    marginTop: 20,
  },
  questionText: {
    fontFamily: 'NotoSans-Medium',
    color: titleColor,
    fontSize: 15,
    lineHeight: 20,
    opacity: 0.9,
    marginBottom: 10,
  },
  radioStyle: {
    marginTop: 4,
  },
  radioLabel: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'NotoSans-SemiBold',
    paddingRight: 20,
    marginLeft: -4,
  },
});
