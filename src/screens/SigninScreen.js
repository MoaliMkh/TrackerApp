import React, { useContext, useState } from "react";
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { Input, Text, Button } from "@rneui/themed";
import { Context as AuthContext} from "../context/AuthContext";


import Spacer from "../components/Spacer";

const SigninScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {state, signin, clearError} = useContext(AuthContext);

    const unsubscribe = navigation.addListener('blur', () => {clearError()});

    return (
        <View style={styles.view}>
            <Spacer>
                <Text h3>Sign in to Tracker</Text>
            </Spacer>

            <Input label="email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false}/>
            

            <Input label="password" value={password} onChangeText={setPassword} autoCapitalize="none" autoCorrect={false} secureTextEntry/>
            {state.errorMessage ? <Text style={{color: 'red', fontSize: 16, margin: 15}}>{state.errorMessage}</Text> : null}
            <Spacer>
                <Button title="Sign in" onPress={() => {signin({email, password}, {navigation})}}/>
                <TouchableOpacity onPress={() => {navigation.navigate("Signup")}}>
                    <Text style = {{color: 'blue'}}>Don't have an account? Sign up instead</Text>
                </TouchableOpacity>
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

export default SigninScreen;