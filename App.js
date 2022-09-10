import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import MainFlowScreen from './src/screens/MainFlowScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';

const Stack = createNativeStackNavigator();


const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRoutename="SignupScreen">
      <Stack.Screen name="Signup" options={{headerShown: false}} component={SignupScreen} />

        <Stack.Screen name="Account" component={AccountScreen}  />
        <Stack.Screen name="Signin" component={SigninScreen} options={{headerShown: false}} />
        <Stack.Screen name="TrackCreate" component={TrackCreateScreen} />
        <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
        <Stack.Screen name="TrackList" component={TrackListScreen} />
        <Stack.Screen name="MainFlow" component={MainFlowScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const MyInput = React.forwardRef((ref) => {
//   return <input ref={ref}/>;
// });

export default () => {
  return (
  <AuthProvider>
    {/* <App ref={(navigator) => {setNavigator(navigator)}}/> */}
    <App />
  </AuthProvider>
  );
};
