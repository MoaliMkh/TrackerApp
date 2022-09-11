import React, { useEffect } from "react";
import {View, Text, StyleSheet} from 'react-native';
import Map from '../components/Map'
import { SafeAreaView } from "react-navigation";
import RNLocation from 'react-native-location';


const TrackCreateScreen = () => {


    // const startWatching = async () => {
    //     try{
    //         await Geolocation.requestAuthorization("always");
    //     }
    //     catch (err) {
    //         console.log(err)
    
    //     };
    // } 
    //  useEffect (() => {startWatching()}, []);

    // RNLocation.configure({
    //     distanceFilter: 5.0
    //   })
       
      RNLocation.requestPermission({
        ios: "whenInUse",
        android: {
          detail: "coarse"
        }
      }).then(granted => {
          if (granted) {
            console.log("Granted");
            RNLocation.configure({ distanceFilter: null });
            RNLocation.getLatestLocation({ timeout: 60000 })
            .then(latestLocation => {
                console.log(latestLocation)
            })
            }})
    
    
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Map />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

});

export default TrackCreateScreen;