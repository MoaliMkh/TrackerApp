import React, {useEffect, useContext} from "react";
import {Context as AuthContext} from '../context/AuthContext'

const ResolveAuth = (props) => {
    const {tryLocalSignin} = useContext(AuthContext);
    
    useEffect (() => {tryLocalSignin(props)}, []);
    return null;
};

export default ResolveAuth;