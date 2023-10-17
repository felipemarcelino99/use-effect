import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  const [contador, setContador] = useState(0);
  const [renderizado, setRenderizado] = useState(true);

  useEffect(() => {
   console.log('Renderizou contador')
  
    return () => {
      // Ação ao ser desmontado
    }
  }, [contador]) //Depêndencia que será 'observada' pelo useEffect...Sempre que sofrer uma alteração, chama o useEffect
  

  return (
    <View style={styles.container}>
      <Button title='Aumentar' onPress={() => setContador(contador+1)} />
      <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginVertical: 20}}>{contador}</Text>
      <Button title='Diminuir' onPress={() => setContador(contador-1)} />

      <View style={{marginVertical: 20}}>
        <Button style={{marginVertical: 20}} title='Renderizar' onPress={() => setRenderizado(renderizado ? false : true)} />
        {renderizado && <Nome/>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Nome() {
  useEffect(() => {
    console.log('Renderizou nome')
   
     return () => {
       // Ação ao ser desmontado
       console.log('Desmontou nome')
     }
   }, []) 

  return <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginVertical: 20}}>Felipe</Text>
}
