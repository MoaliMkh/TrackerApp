import createDataContext from "./createDataContext";
import TrackerAPI from "../api/TrackerAPI";

const authReducer = (state, action) => {
    switch (action.type){
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
            console.log(err.message);

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
    {isSignIn: false}
);