import React from "react";
import {Text, StyleSheet} from 'react-native';
import MapView from "react-native-maps";

const Map = () => {
    return (
        <MapView style={styles.Map} />            
    );
};

const styles = StyleSheet.create({
    Map: {height: 200}
});

export default Map;