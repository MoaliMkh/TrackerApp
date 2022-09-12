import React, { useContext } from "react";
import {TextInput, Button} from 'react-native';
import { Context as LocationContext } from "../context/LocationContext";


const TrackForm = (props) => {
    const {state, changeName, startRecording, stopRecording} = useContext(LocationContext);

    return (
        <>
        <TextInput placeholder="Enter the name of the track" 
        onChangeText={changeName}
        value={state.name}/>

        {state.recording 
        ? <Button title="Stop" onPress={stopRecording}/>
        : <Button title="Start Recording" onPress={props.callback}/>
        }
        </>
    );
}

export default TrackForm;