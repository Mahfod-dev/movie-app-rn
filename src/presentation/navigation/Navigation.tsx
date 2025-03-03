import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import DetailsScreen from '../screens/details';

export type RootStackParams = {
  Home: undefined;
  Details: {movieId: string};
};

const Stack = createStackNavigator<RootStackParams>();

export default function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
