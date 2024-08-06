import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';


function TextButton(props) {
  return <Text style={{color: "white"}}>{props.title}</Text>;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="botao"
        onPress={()=>Alert.alert('sei la')}
        />

      <Text style={{ color: "white", fontSize: 100 }}>AquapH</Text>
      <StatusBar style="dark" />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});
