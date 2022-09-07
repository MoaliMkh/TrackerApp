import React, { useState } from "react";
import {View, StyleSheet} from 'react-native';
import { Input, Text, Button } from "@rneui/themed";
import Spacer from "../components/Spacer";



const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.view}>
            <Spacer>
                <Text h3>Signup For Tracker</Text>
            </Spacer>

            <Input label="email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false}/>
            

            <Input label="password" value={password} onChangeText={setPassword} autoCapitalize="none" autoCorrect={false} secureTextEntry/>

            <Spacer>
                <Button title="Sign up" onPress={() => {navigation.navigate('Signin')}}/>
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