import React from "react";
import {StyleSheet} from 'react-native';
import Map from '../components/Map'
import { SafeAreaView } from "react-navigation";
import Geolocation from '@react-native-community/geolocation';
// import '../ـMockLocation';



const TrackCreateScreen = () => {

    Geolocation.watchPosition(info => console.log(info), {timeout: 1000, distanceFilter: 10})
    


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