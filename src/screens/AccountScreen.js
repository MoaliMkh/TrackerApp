import React, { useContext } from "react";
import {View, Text, StyleSheet, Button} from 'react-native';
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = (props) => {
    const {signout} = useContext(AuthContext);
    return(
        <View style={{margin: 15}}>
            <Text style={{fontSize: 30}}>Account Screen</Text>
            <Button title="Sign out" onPress={() => {signout(props)}}/>
        </View>
        
    );
};

const styles = StyleSheet.create({

});

export default AccountScreen;