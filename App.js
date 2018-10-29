// Libraries
import { StackNavigator } from 'react-navigation';
// import components
import Welcome from './src/Welcome';
import ListScreen from './src/ListScreen';
// create our app's navigation stack
console.disableYellowBox = true;

const StackNav = StackNavigator(
  {
    Welcome: { screen: Welcome },
    ListScreen: { screen: ListScreen },
  },
  {
    headerMode: 'none',
  }
);

StackNav.navigationOptions = {
  gesturesEnabled: true,
};
export default StackNav;
