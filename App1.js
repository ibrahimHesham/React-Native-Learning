import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default class App1 extends React.Component {
  constructor(){
    super();
    this.state = {
        email:"",
        password:"",
        text:""
    }
}

login=async ()=>{
    let user = {
        email:this.state.email,
        password:this.state.password
    }
    let res= await fetch("https://reqres.in/api/login",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(user)
    });
    let resJson = await res.json();
    if(resJson.token){
        // this.props.login();
        alert("Login success");

    }else{
        alert(resJson.error)
    }
}
  
  render(){
    return (
      <View style={styles.container}>
        <TextInput
        style={styles.input}
        onChangeText={(email) =>this.setState({ email })}
        value={this.state.email}
      />
      <TextInput
        style={styles.input}
        onChangeText={(password) =>this.setState({ password })}
        value={this.state.password}
      />
      <Button
                title="Login"
                onPress={this.login}
        />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'red',
    backgroundColor:'yellow'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
}
});
