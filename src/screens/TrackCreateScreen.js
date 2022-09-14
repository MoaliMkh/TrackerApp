import React, {useContext, useState} from "react";
import {Text} from 'react-native';
import Map from '../components/Map'
import { SafeAreaView } from "react-navigation";
import Geolocation from '@react-native-community/geolocation';
import { Context as LocationContext } from "../context/LocationContext";
import TrackForm from "../components/TrackForm";
// import '../ـMockLocation';

const TrackCreateScreen = ({navigation}) => {

    const {startRecording, state:{recording, locationTrackID}, changeLocationTrackID} = useContext(LocationContext);
    // if(!recording){
    //      console.log(recording);
    // }
    navigation.addListener('blur', () => {Geolocation.clearWatch(locationTrackID)});

    // console.log(recording);
    // navigation.addListener('blur', () => {Geolocation.clearWatch(locationTrackID)});
    
    
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text>Create a Track</Text>
            <Map /> 

            <TrackForm callback={() => {const sub = Geolocation.watchPosition((location) => startRecording(location));
                changeLocationTrackID(sub);
                console.log(recording)}}/>
            
        </SafeAreaView>
    );
};

export default TrackCreateScreen;