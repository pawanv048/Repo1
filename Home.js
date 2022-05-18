//Props are mainly used in reusable component
//  Props are the form of data which is set on parent component and 
//  pass it to child component
// pre-defined component also have props
import { StyleSheet, Text, View, Image,  } from 'react-native'
import React from 'react'

function Banana() {
  let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  }
  return (
    <Image source={pic} style={{ width: 193, height: 110, marginTop: 50 }} />
  )
}

const Greeting = (props) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text>Hello {props.name}</Text>
    </View>
  )
}

const props = (props) => {
  //console.warn(props): show which data is passing from parent component 
  return (
   
      <View>
        <Text>Child component to Passing</Text>
        <Text>{props.data}</Text>
        {Banana()}
        <Greeting name='Rexxar' />
        <Greeting name='jane' />
      </View>
    
  )
}

export default props

const styles = StyleSheet.create({})

/********parent/app.js*********/

// import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
// import React from 'react'
// import Home from './components/Home'

// const App = (props) => {
//   const data = "some data is declared"
//   return (
//     <SafeAreaView>
//       <Text style={{fontSize: 40, fontWeight: 'bold'}}>
//         props Passing
//       </Text>
//       <Home data ={data}/>
//       <Home/>
//       <Home/>
//       <Home/>
//     </SafeAreaView>
//   )
// }

// export default App