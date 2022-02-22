import { StyleSheet, Text, TextInput, View } from 'react-native';
import color from '../utils/color';
import RNPickerSelect from 'react-native-picker-select';
import React from 'react';

export default function Form(props) {

    const {capital,interes,meses} = props;
  return (
    <View style = {styles.viewForm}>
      <View style = {styles.viewInput}>
          <TextInput placeholder='Cantidad a Pedir' keyboardType='numeric' style = {styles.input} onChange={(e)=> capital(e.nativeEvent.text)}></TextInput>
          <TextInput placeholder='Interes %' keyboardType='numeric' style= {[styles.input,styles.inputPorcentaje]} onChange={(e) => interes(e.nativeEvent.text)}></TextInput>
      </View>
      <RNPickerSelect placeholder={{label:"Selecciona los meses"}}

      useNativeAndroidPickerStyle={false}
      style = {pickerSelectStyles}
            onValueChange={(value) => meses(value)}
            items={[
                { label: '3 Meses', value: 3 },
                { label: '6 Meses', value: 6 },
                { label: '12 Meses', value: 12 },
                { label: '24 Meses', value: 24 },
            ]}
        />
    </View>
   
  );
}

const styles = StyleSheet.create({
    viewForm:{
        position : "absolute",
        bottom: 0,
        width : "85%",
        paddingHorizontal: 50,
        backgroundColor: color.PRIMARY_COLOR_DARK,
        borderRadius : 40,
        height: 180,
        justifyContent: 'center'
    },
    viewInput : {
        flexDirection: 'row'
    },
    input : {
        height: 50,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: color.PRIMARY_COLOR,
        borderRadius: 5,
        width: "60%",
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: "#000",
        paddingHorizontal:20
    },
    inputPorcentaje : {
        width: "40%",
        marginLeft: 5
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 40,
        color: "black",
        paddingRight: 30,
        backgroundColor: "#fff",
        marginLeft: -5,
        marginRight: -5
    },
    inputAndroid:{
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: "grey",
        borderRadius: 8,
        color: "black",
        paddingRight: 30,
        backgroundColor: "#fff"
    }
});


