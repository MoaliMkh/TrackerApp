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
import ResolveAuth from './src/screens/ResolveAuth';
import {Provider as LocationProvider} from './src/context/LocationContext';
import {Provider as TrackProvider} from './src/context/TrackContext';



const Stack = createNativeStackNavigator();


const App = () => {
  return(
      <NavigationContainer>
        <Stack.Navigator initialRoutename="SignupScreen">

          <Stack.Screen name="ResolveAuth" options={{headerShown: false}} component={ResolveAuth}/>
          <Stack.Screen name="Signup" options={{headerShown: false}} component={SignupScreen}/>
          <Stack.Screen name="Account" component={AccountScreen}  />
          <Stack.Screen name="Signin" component={SigninScreen} options={{headerShown: false}}/>
          <Stack.Screen name="TrackCreate" component={TrackCreateScreen} />
          <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
          <Stack.Screen name="TrackList" component={TrackListScreen} />
          <Stack.Screen name="MainFlow" component={MainFlowScreen} />

        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default () => {

  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
