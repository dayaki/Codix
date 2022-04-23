import { StyleSheet } from 'react-native';

const spacing = [0, 4, 8, 12, 16, 24, 32, 48, 64];

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F3',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.8)',
    paddingVertical: 20,
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 120,
    marginRight: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 16,
    elevation: 2,
  },
  btnImage: {
    width: 50,
    height: 50,
  },
  btnText: {
    marginTop: 2,
    fontSize: 10,
    fontWeight: '500',
    color: '#34345B',
  },
});

export const feedbackStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingHorizontal: 30,
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.8)',
    marginBottom: 20,
  },
  qrScanner: {
    // paddingHorizontal: 60,
    width: '90%',
    alignSelf: 'center',
  },
  btn: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '46%',
    height: 40,
    alignSelf: 'center',
    borderRadius: spacing[1],
    borderColor: '#1E1E29',
    borderWidth: 1,
    marginTop: 30,
  },
  btnText: {
    color: '#1E1E29',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
  question_header: {
    borderBottomColor: 'rgba(30, 30, 41,0.3)',
    borderBottomWidth: 1,
    paddingHorizontal: 30,
  },
  feedback_data: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  feedback_title: {
    color: '#1E1E29',
    fontSize: 12,
    textAlign: 'left',
  },
  feedback_label: {
    color: '#1E1E29',
    fontSize: 12,
    opacity: 0.5,
    textAlign: 'left',
  },
  questions: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  questionInfo: {
    color: '#1E1E29',
    fontSize: 12,
    lineHeight: 20,
    opacity: 0.6,
  },
  question: {
    marginTop: 10,
  },
  questionText: {},
  textarea: {
    borderColor: 'rgba(30, 30, 41,0.2)',
    borderWidth: 1,
    textAlignVertical: 'top',
    paddingLeft: 10,
    marginTop: 20,
    borderRadius: 6,
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputWrapper: {
    marginTop: 30,
  },
  label: {
    color: 'rgba(0,0,0,0.8)',
    fontSize: 14,
    marginBottom: 6,
  },
  input: {
    borderRadius: 6,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1,
    height: 46,
    paddingLeft: 10,
  },
  forgotPass: {
    color: 'red',
    fontSize: 14,
    paddingVertical: 20,
    alignSelf: 'flex-end',
    marginTop: spacing[0],
    marginBottom: 30,
  },
});

export const registerDeviceStyles = StyleSheet.create({
  container: {},
});
