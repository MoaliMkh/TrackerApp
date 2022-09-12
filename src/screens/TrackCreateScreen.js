import React, { useEffect } from "react";
import {View, Text, StyleSheet} from 'react-native';
import Map from '../components/Map'
import { SafeAreaView } from "react-navigation";
import Geolocation from '@react-native-community/geolocation';
// import '../ـMockLocation';



const TrackCreateScreen = () => {

    Geolocation.watchPosition(info => console.log(info))
    


    // const startWatching = () => {
    //     try{
    //         Geolocation.requestAuthorization("always");
    //     }
    //     catch (err) {
    //         console.log(err)
    
    //     };
    // } 
    //  useEffect (() => {startWatching()}, []);
       
      
    
    
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Map />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

});

export default TrackCreateScreen;