import React, { Component } from 'react';
import { Alert, Button,Text,Image, TextInput, View, StyleSheet } from 'react-native';
import logo from './assets/wc.png';
import { StatusBar } from 'expo-status-bar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stand: '',
      surburb: '',
      location: '',
    };
  }
  
  onLogin() {
    const { stand, surburb, location} = this.state;

    Alert.alert('Data entered', `${stand} + ${surburb} + ${location}`);
  }
  render() {
    return (
      
      <View style={styles.container}>
                <Text style={{ color: "#60605e",fontSize:22 }}>Housing management App vs</Text>
        <StatusBar style="dark" />
                <Text style={{ textShadowColor: "#60605e", fontSize: 30}}>
         Find it here !
        </Text>
        <Image source={logo} style={{ width: 305, height: 250 }}
         /> 
        <Text style={{ textShadowColor: "#60605e", fontSize: 15}}>
         HTENG VS G001
        </Text>
        <TextInput
          value={this.state.stand}
          onChangeText={(stand) => this.setState({ stand })}
          placeholder="stand number"
          placeholderTextColor="#60605e"
          numeric
          keyboardType={'numeric'}
          style={styles.input}
        />
        <TextInput
          value={this.state.surburb}
          onChangeText={(surburb) => this.setState({ surburb })}
          placeholder={'Surbub'}
          placeholderTextColor="#60605e"
          //secureTextEntry={true}
          style={styles.input}
        />
          <TextInput
          value={this.state.location}
          onChangeText={(location) => this.setState({ location })}
          placeholder={'Town'}
          placeholderTextColor="#60605e"
          style={styles.input}
        />
        
        <Button
          title={'Submit'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 10,
  },
});
