import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import React from 'react';
import color from '../utils/color';
export default function Footer(props) {
    const{ calcular }=props;
    return (
        <View style={styles.viewFooter}>
            <TouchableOpacity style={styles.buttonCalc} onPress={calcular}>
                <Text style={styles.calculate}>CALCULAR</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    viewFooter: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: color.PRIMARY_COLOR,
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    calculate: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#fff",
        textAlign: "center",

    },
    buttonCalc: {
        backgroundColor: color.PRIMARY_COLOR_DARK,
        padding: 16,
        borderRadius: 20,
        width: "75%",
    }
});
