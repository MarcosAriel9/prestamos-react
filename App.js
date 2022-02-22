import { StyleSheet, Text, View, StatusBar, SafeAreaView, Button } from 'react-native';
import color from './src/utils/color';
import Form from './src/components/Form';
import React, { useState,useEffect } from 'react';
import Footer from './src/components/Footer';
import Results from './src/components/Results';


export default function App() {
  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [meses, setMeses] = useState(null);
  const [total, settotal] = useState(null)
  const [errorR, seterrorR] = useState('')
  useEffect(() => {
   //console.log("wenas")
   if(capital&&interes&&meses){
     calcular();
   }else{
     reset();
   }
  }, [capital,interes,meses]);
  

  const calcular = () => {
    reset();
    // console.log("cap -> " + capital);
    // console.log("int -> " + interes);
    // console.log("mes -> " + meses);
    if (!capital) {
      seterrorR("ingresa el capital");
    } else if (!interes) {
      seterrorR("ingresa el interes");
    } else if (!meses) {
      seterrorR("ingresa los meses");
    } else {      
      const inte = interes / 100;
      const pagos = capital / ((1 - Math.pow(inte + 1, -meses)) / inte);
      console.log(pagos.toFixed(2));
      console.log((pagos*meses).toFixed(2));
      settotal({
        pagoMes:pagos.toFixed(2),
        pagototal:(pagos*meses).toFixed(2)
      })
      console.log("cap -> " + capital);
      console.log("int -> " + interes);
      console.log("mes -> " + meses);

    }
  }
  const reset=()=>{
    seterrorR(""),
    settotal(null)
     }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background}></View>
        <Text style={styles.tittleApp}>Mis Prestamos</Text>
        <Form capital={setCapital} interes={setInteres} meses={setMeses}></Form>
      </SafeAreaView>
     <Results errorM ={errorR } total={total} capital={capital} interes={interes} meses={meses} >

     </Results>
    
      <Footer calcular={calcular}></Footer>
    </>
  );
}
 
const styles = StyleSheet.create({
  safeArea: {
    //backgroundColor:color.PRIMARY_COLOR,
    height: 290,
    alignItems: "center"
  },
  tittleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15
  },
  background: {
    //backgroundColor: color.PRIMARY_COLOR,
    alignItems: "stretch",
    backgroundImage: color.IMAGEBACKGR,
    backgroundRepeat: 'no-repeat',
    height: 200,
    width: "100%",
    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30,
    position: 'absolute',
    zIndex: -1
  }
});
