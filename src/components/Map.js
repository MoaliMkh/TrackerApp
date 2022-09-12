import React, {useEffect} from "react";
import {Text, StyleSheet} from 'react-native';
import MapView, {Polyline} from "react-native-maps";


const Map = () => {

    let points = [];
    for (let i = 0; i < 20; i++){
        if (i % 2 === 0){
        points.push({latitude: 37.33233 + i * 0.001, 
            longitude: -122.03121 + 0.001 * i});
        }
        else{
            points.push({latitude: 37.33233 + i * 0.002, 
                longitude: -122.03121 + 0.001 * i});
        }
    }




    return (
        <MapView style={styles.Map} 
            initialRegion={{latitude: 37.33233, longitude: -122.03121,
            latitudeDelta: 0.01, longitudeDelta: 0.01}}
            region={{"accuracy": 100, "altitude": 0, "altitudeAccuracy": -1, "heading": 258.19, "latitude": 35.689198, "longitude": 51.388973, "speed": 3.84}}
            showsUserLocation={true}
            >
            <Polyline coordinates={points}/> 
            
        </MapView>            
    );
};

const styles = StyleSheet.create({
    Map: {height: 200}
});

export default Map;