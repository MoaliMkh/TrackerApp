import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
    switch(action.type){

        case 'start_record':            
            console.log(state.locations.length);
            return {...state, recording: true, currentLocation: action.payload, locations:[...state.locations, action.payload]}

        case 'stop_record':
            return {...state, recording: false}

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
    return (location) => {
        dispatch({type: 'start_record', payload: location});
                
    }
};

const stopRecording = dispatch => {
    return () => {
        dispatch({type: 'stop_record'});     
    }
};


export const {Context, Provider} = createDataContext (locationReducer, 
    {startRecording, stopRecording, changeName}, {name: '', recording: false, locations: [], currentLocation: null} );

