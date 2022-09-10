import createDataContext from "./createDataContext";
import TrackerAPI from "../api/TrackerAPI";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { navigate } from "../navigationRef";
import { useNavigation } from "@react-navigation/native";




const authReducer = (state, action) => {
    switch (action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'signup':
            return {errorMessage: '', token: action.payload}
        default:
            return state;
    }
};



const signup = (dispatch) => {

    // const navigation = useNavigation();
    return async ({email, password}, {navigation}) => {

        try{
            const response = await TrackerAPI.post('/signup', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            console.log("SIGNED IN...")
            dispatch({type: 'signup', payload: response.data.token});
            navigation.navigate('TrackList');
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
    {isSignIn: false, errorMessage: '', token: null}
);