import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
  TextInput,
  TouchableOpacity
} from 'react-native';
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import Task from './components/Task';


const App = () => {

  const [task, setTask] = React.useState();

  const handleAddTask = () => {
      console.log(task);
  }
  return (
    
      <SafeAreaView style={styles.container}>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>
            Today's Task
          </Text>
          <View>
            <Task text='this is task 1' />
            <Task text='this is task 2' />
            <Task text='this is task 2' />
            
          </View>
        </View>

          {/* write about you task */}

          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.writeTaskWrapper}
          >
            <TextInput
              style= {styles.input} placeholder={'write your task'} onChangeText={text => setTask(text)}/>
            <TouchableOpacity onPress={() => handleAddTask()}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
      </SafeAreaView>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAE8ED'
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
     justifyContent: 'space-around',
     alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    padding: 15,
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0'
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addText: {},
})


export default App;