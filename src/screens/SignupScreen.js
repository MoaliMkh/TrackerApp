import React, { useState } from "react";
import {View, StyleSheet} from 'react-native';
import { Input, Text, Button } from "@rneui/themed";
import Spacer from "../components/Spacer";
import { Context as AuthContext} from "../context/AuthContext";
import { useContext } from "react";



const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {state, signup} = useContext(AuthContext);

    console.log(state);

    return (
        <View style={styles.view}>
            <Spacer>
                <Text h3>Signup For Tracker</Text>
            </Spacer>

            <Input label="email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false}/>
            

            <Input label="password" value={password} onChangeText={setPassword} autoCapitalize="none" autoCorrect={false} secureTextEntry/>
            {state.errorMessage ? <Text style={{color: 'red', fontSize: 16, margin: 15}}>{state.errorMessage}</Text> : null}
            <Spacer>
                <Button title="Sign up" onPress={() => {signup({email, password}, {navigation})}}/>
                <Button title="Go to Sign in screen" onPress={() => {navigation.navigate('Signin')}}/>
                <Button title="Go to Main Flow" onPress={() => {navigation.navigate('MainFlow')}}/>
            </Spacer>


        </View>
    );
};

const styles = StyleSheet.create({
    view:{
        flex: 1,
        alignItems: "center",
        marginTop: 200,
        marginHorizontal: 10
    }

});

export default SignupScreen;