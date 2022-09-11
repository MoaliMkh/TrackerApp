import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import Map from '../components/Map'
import { SafeAreaView } from "react-navigation";

const TrackCreateScreen = () => {
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Map />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

});

export default TrackCreateScreen;