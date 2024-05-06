import {Alert, Button, ScrollView, StyleSheet, Text, View } from "react-native";

const App = () => {

 return <>
 <View style={styles.container}>
   
  <Text style={styles.title} >
    Welcome to react native page 
  </Text>
  <Button 
  title="Press me"
  color="#5AB2FF"
  onPress={() => Alert.alert('Simple Button pressed')}
/>

 </View>
 </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingHorizontal: 10,
    backgroundColor: '#eee',
    justifyContent:'center',

  },
  title: {
    // marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232b',
    borderRadius: 6,
    backgroundColor: '#FFDB5C',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',

    
  },
  btn:{
    backgroundColor:"#FFAF61",
  }
});


export default App;