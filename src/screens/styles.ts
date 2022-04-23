import { StyleSheet } from 'react-native';
import { backgroundColor, labelColor, titleColor } from '../common';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingHorizontal: 20,
    paddingTop: 50,
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
  },
  qrScanner: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 100,
  },
  backBtn: {
    width: 100,
    paddingVertical: 14,
    paddingHorizontal: 15,
    position: 'absolute',
    left: 8,
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
});
