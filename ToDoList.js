import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ToDoList extends React.Component {
    
    render(){
      return (
        <View style={styles.container}>
            <Text style={styles.bigtext}>YOUR LIST</Text>
          {this.props.todos.map((todo,i)=>{
                    return <Text style={styles.text} key={i}>{todo}</Text>
                })}
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
        fontSize:20,
      color:'red',
      backgroundColor:'yellow'
    },
    bigtext:{
        fontSize:40,
        color:'blue',
        marginBottom:10
    }
  });