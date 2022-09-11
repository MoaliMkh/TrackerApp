import React, { useContext } from "react";
import {View, Text, StyleSheet, Button} from 'react-native';
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from 'react-navigation';


const AccountScreen = (props) => {
    const {signout} = useContext(AuthContext);
    return(
        <SafeAreaView forceInset={{top: 'always'}}>
            <View>
                <Text style={{fontSize: 30}}>Account Screen</Text>
                <Button title="Sign out" onPress={() => {signout(props)}}/>
            </View>
        </SafeAreaView >

        
    );
};

const styles = StyleSheet.create({

});

export default AccountScreen;