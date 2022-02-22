import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Results = (props) => {
    const {errorM,total,capital,interes,meses} = props
  return (
    <View style={styles.content}>
        {total &&(
            <View style={styles.resultado}>
                <Text style={styles.title}>Resumen</Text>
                {/* <View style={styles.values}>
                    <Text>cantidad solicitada</Text>
                    <Text>{capital}</Text>
                </View> */}
                <DataResults label={"Cantidad solicitada"} value={capital}></DataResults>
                <DataResults label={"Interes %"} value={interes}></DataResults>
                <DataResults label={"Meses"} value={meses}></DataResults>
                <DataResults label={"Pago mensual"} value={total.pagoMes}></DataResults>
                <DataResults label={"Pago total"} value={total.pagototal}></DataResults>
            </View>
        )}
        <View><Text style={styles.error}>{errorM}</Text></View>
      
    </View>
  )
}

export default Results
 const DataResults =(props)=>{
     const {label,value}=props;
     return(
        <View style={styles.values}>
        <Text>{label}</Text>
        <Text>{value}</Text>
    </View>
     )
 }
const styles = StyleSheet.create({
    error:{
        textAlign:"center",
        color:"red",
        fontWeight:"bold",
        fontSize:20
    },
    content:{
        marginTop:10,
        marginHorizontal:40
    },resultado:{
        padding:30
    },title:{
        fontSize:25,
        textAlign:"center",
        fontWeight:"bold",
        marginBottom:20
    },values:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:20
    }


})