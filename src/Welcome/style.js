import { Dimensions, Platform } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const isAndroid = Platform.OS === 'android';

const style = {
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerView: {
    height: deviceHeight * 0.11,
    paddingTop: isAndroid ? 0 : 20,
    alignItems: 'center',
    backgroundColor: '#111',
  },
  welcomeText: {
    fontSize: 32,
    textAlign: 'center',
    color: '#fff',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  btnStyle: {
    height: 50,
    width: deviceWidth - 48,
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: '#111',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
};
export default style;
