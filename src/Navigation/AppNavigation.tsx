
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../Containers/HomeScreen/HomeScreen";

const AppNavigation = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    }
  },
  {
        initialRouteName: 'Home'
  });

export default createAppContainer(AppNavigation);