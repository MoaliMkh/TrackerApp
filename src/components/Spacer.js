import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native';

const Spacer = ({children}) => {
    return(
        <View style={styles.spacer}>
            {children}
        </View>
        
    );
};

const styles = StyleSheet.create({
    spacer: {
        margin: 15
    }

});

export default Spacer;