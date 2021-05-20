import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class AddTask extends React.Component {
    constructor(){
        super();
        this.state ={
            content:"",
            state:"waiting",

        }
    }
    render(){
      return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(content) =>this.setState({ content })}
                value={this.state.content}
            />
            <Button
                title="Add task"
                onPress={()=>this.props.addTask(this.state.content)}
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