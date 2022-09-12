import React, {useContext} from "react";
import {Text, StyleSheet, ActivityIndicator} from 'react-native';
import MapView, {Circle, Polyline} from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";


const Map = () => {
    const {state: {currentLocation}} = useContext(LocationContext);

    if (!currentLocation){
        return <ActivityIndicator size="large" style={{marginTop: 200}} />
    }


    // let points = [];
    // for (let i = 0; i < 20; i++){
    //     if (i % 2 === 0){
    //     points.push({latitude: 37.33233 + i * 0.001, 
    //         longitude: -122.03121 + 0.001 * i});
    //     }
    //     else{
    //         points.push({latitude: 37.33233 + i * 0.002, 
    //             longitude: -122.03121 + 0.001 * i});
    //     }
    // }

    return (
        <MapView style={styles.Map} 
            initialRegion={{...currentLocation.coords, latitudeDelta: 0.01, longitudeDelta: 0.01}}
            // region={{...currentLocation.coords,
                //latitudeDelta: 0.01, longitudeDelta: 0.01}}
            // region={{"accuracy": 100, "altitude": 0, "altitudeAccuracy": -1, "heading": 258.19, "latitude": 35.689198, "longitude": 51.388973, "speed": 3.84}}
            // showsUserLocation={true}
            >
        <Circle center={currentLocation.coords} radius={50} 
        strokeColor="rgba(158, 158, 255, 1.0)" fillColor="rgba(158, 158, 255, 0.3)"/>
        </MapView>            
    );
};

const styles = StyleSheet.create({
    Map: {height: 200}
});

export default Map;