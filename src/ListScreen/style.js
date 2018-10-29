import { Dimensions, Platform } from 'react-native';

// const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const isAndroid = Platform.OS === 'android';

const style = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerView: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    height: 80,
    paddingTop: isAndroid ? 0 : 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#111',
  },
  welcomeText: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  innerContainer: {
    flex: 1,
    alignSelf: 'center',
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  listView: {
    height: 50,
    width: deviceWidth - 32,
    alignItems: 'center',
    flexDirection: 'row',
  },
};
export default style;
