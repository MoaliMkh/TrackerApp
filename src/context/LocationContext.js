import createDataContext from "./createDataContext";
import Geolocation from "@react-native-community/geolocation";

const locationReducer = (state, action) => {
    switch(action.type){
        case 'add_location':
            return {...state, currentLocation: action.payload}
        case 'start_record':
            
            return {...state, recording: true}
        case 'stop_record':
            return {...state, recording: false}
        // case 'add_location':
        //     return {...state, locations:[...state.locations, action.payload]}
        case 'change_name':
            return {...state, name: action.payload}
        default:
            return state
    }
};

const changeName = dispatch => {
    return (name) => {
        dispatch({type: 'change_name', payload: name});
    }
}
const startRecording = dispatch => {
    return () => {
        dispatch({type: 'start_record'});


    }
};

const stopRecording = dispatch => {
    return () => {
        dispatch({type: 'stop_record'});     
    }
};

const addLocation = dispatch => {
    return (location) => {
        console.log("TRACKING...");
        dispatch({type: 'add_location', payload: location})
        // if(recording){
        //     // setLocationTrackID(sub)
        //     dispatch({type: 'add_location', payload: location})
        // }
    }
}

export const {Context, Provider} = createDataContext (locationReducer, 
    {startRecording, stopRecording, addLocation, changeName}, {name: '', recording: false, locations: [], currentLocation: null} );

