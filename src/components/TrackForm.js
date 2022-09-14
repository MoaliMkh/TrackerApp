import React, { useContext } from "react";
import {TextInput, Button} from 'react-native';
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";
import Geolocation from "@react-native-community/geolocation";


const TrackForm = (props) => {
    const {state, changeName, stopRecording, locationTrackID} = useContext(LocationContext);

    const [saveTrack] = useSaveTrack();

    return (
        <>
        <TextInput placeholder="Enter the name of the track" 
        onChangeText={changeName}
        value={state.name}/>

        {state.recording 
        ? <Button title="Stop" onPress={() => {stopRecording(locationTrackID);}}/>
        : <Button title="Start Recording" onPress={props.callback}/>
        }
    
        {(!state.recording && state.locations.length) ? <Button onPress={saveTrack} title="Save your record"/> : null}
        </>
    );
}

export default TrackForm;