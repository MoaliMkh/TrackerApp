import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TrackCreateScreen from './TrackCreateScreen';
import TrackListScreen from './TrackListScreen';
import AccountScreen from './AccountScreen';


const Tab = createBottomTabNavigator();

const MainFlowScreen =  () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="TrackList" component={TrackListScreen} />
        <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default MainFlowScreen;