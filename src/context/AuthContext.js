import createDataContext from "./createDataContext";
import TrackerAPI from "../api/TrackerAPI";

const authReducer = (state, action) => {
    switch (action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload};
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return async ({email, password}) => {

        try{
            const response = await TrackerAPI.post('/signup', {email, password});
            console.log(response.data);
        }
        catch(err){
            dispatch({type: 'add_error', payload: 'Something went wrong with the signup process'})

        }
        
    };

};

const signin = (dispatch) => {
    return ({email, password}) => {
        
    };

};

const signout = (dispatch) => {
    return () => {
        
    };

};


export const {Context, Provider} = createDataContext(
    authReducer,
    {signup},
    {isSignIn: false, errorMessage: ''}
);