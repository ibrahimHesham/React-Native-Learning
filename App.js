import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToDoList from './ToDoList'
import AddTask from './AddTask'

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
        todos:["task 1","task 2"],
        taskText:"",
        duplicationError:"",
    }
}


addTask=(task)=>{
    
    let newtodolist = this.state.todos;
    newtodolist.push(task);
    this.setState({todos:newtodolist})

}
  
  render(){
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ToDoList todos={this.state.todos} />
        <AddTask addTask={this.addTask}/>
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
  }
});
