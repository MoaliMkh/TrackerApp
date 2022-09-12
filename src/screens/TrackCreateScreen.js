import React, {useContext, useState} from "react";
import {Text} from 'react-native';
import Map from '../components/Map'
import { SafeAreaView } from "react-navigation";
import Geolocation from '@react-native-community/geolocation';
import { Context as LocationContext } from "../context/LocationContext";
import TrackForm from "../components/TrackForm";
// import '../ـMockLocation';

const TrackCreateScreen = ({navigation}) => {

    const [locationTrackID, setLocationTrackID] = useState(null);
    const {addLocation} = useContext(LocationContext);
    
    navigation.addListener('blur', () => {Geolocation.clearWatch(locationTrackID)});
    
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text>Create a Track</Text>
            <Map /> 

            <TrackForm callback={() => {const sub = Geolocation.watchPosition((location) => addLocation(location), {timeout: 1000, distanceFilter: 10});
                setLocationTrackID(sub)}}/>
        </SafeAreaView>
    );
};

export default TrackCreateScreen;