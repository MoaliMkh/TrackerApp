import createDataContext from "./createDataContext";
import TrackerAPI from '../api/TrackerAPI';

const trackReducer = (state, action) => {
    switch (action.type){
        case 'test':
            return state;
        default: 
            return state;
    }
}
const fetchTracks = (dispatch) => {
    return () => {

    }

}

const createTracks = dispatch => {
    return (name, locations) => {
        console.log(name, locations);
    }

};


export const {Context, Provider} = createDataContext(
    trackReducer, {fetchTracks, createTracks}, [])