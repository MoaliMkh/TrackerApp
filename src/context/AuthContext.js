import createDataContext from "./createDataContext";
import TrackerAPI from "../api/TrackerAPI";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { navigate } from "../navigationRef";




const authReducer = (state, action) => {
    switch (action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'signin':
            return {errorMessage: '', token: action.payload}
        case 'clear_error_message':
            return {...state, errorMessage: ''}
        case 'signout':
            return {errorMessage: '', token: null}
        default:
            return state;
    }
};



const signup = (dispatch) => {

    return async ({email, password}, {navigation}) => {

        try{
            const response = await TrackerAPI.post('/signup', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            console.log(response.data.token);
            console.log("SIGNED IN...");
            dispatch({type: 'signin', payload: response.data.token});
            navigation.navigate('TrackList');
        }
        catch(err){
            dispatch({type: 'add_error', payload: 'Something went wrong with the signup process'})

        }
        
    };

};

const signin = (dispatch) => {
    return async ({email, password}, {navigation}) => {
        try{   
            const response = await TrackerAPI.post('/signin', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signin', payload: response.data.token});
            navigation.navigate('MainFlow');
        }
        catch(err){
            dispatch({type: 'add_error', payload: 'Something went wrong with the signin process'})

        }
    };

};

const tryLocalSignin = dispatch => {
    return async ({navigation}) => {
        const token = await AsyncStorage.getItem('token')
        if (token){
            dispatch({type: 'signin', payload: token });
            navigation.navigate('MainFlow');
        }
        else{
            navigation.navigate('Signup');
        }
    }
}

const clearError = (dispatch) => {
    return () => {dispatch({type: 'clear_error_message'})}
}


const signout = (dispatch) => {
    return async ({navigation}) => {
        await AsyncStorage.removeItem('token');
        dispatch({type: 'signout'});
        navigation.navigate('Signup');
    };
};


export const {Context, Provider} = createDataContext(
    authReducer,
    {signup, signin, signout, clearError, tryLocalSignin},
    {isSignIn: false, errorMessage: '', token: null}
);