import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Interface from '../pages/Interface';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList{
      Home: undefined;
      Interface: undefined;
    }
  }
}

export const Routes = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Interface" component={Interface} options={{title: 'Filme'}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

