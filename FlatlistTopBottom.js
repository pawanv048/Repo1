
import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView
} from 'react-native'


const FlatlistTopBottom = () => {
  let listViewRef;  //declared for scrollView
  //render list
  const [dataSource, setdataSource] = useState([

    {id: 1, title: 'Item 1'},
    {id: 2, title: 'Item 2'},
    {id: 3, title: 'Item 3'},
    {id: 4, title: 'Item 4'},
    {id: 5, title: 'Item 5'},
    {id: 6, title: 'Item 6'},
    {id: 7, title: 'Item 7'},
    {id: 8, title: 'Item 8'},
    {id: 9, title: 'Item 9'},
    {id: 10, title: 'Item 10'},
    {id: 11, title: 'Item 11'},
    {id: 12, title: 'Item 12'},
  
  ]);

  //renderlist into upper text
  const ItemView = ({item}) => {
    return(
      <Text style={styles.itemStyle}>
         {item.id} {'. '}{item.title.toUpperCase()}
      </Text>
    )
  }

  //seperation of each item  
  const ItemSeparatorView = () => {
    return (
      <View style={styles.separator} />
    )
  }

  //button scrolling function
  const EndButtonHandler = () => {
    return (
    listViewRef.scrollToOffset({offset: 0, animated: true})
    )
  }

  
  const TopButtonHandler = () => {
    return (
    listViewRef.scrollToEnd({ animated: true })
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={dataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        ref={(ref) => {
          listViewRef = ref;
        }}
      />
      <TouchableOpacity 
        style={[styles.buttonStyle , {right: 20, top: 70}]}
        onPress = {TopButtonHandler} 
      >
        <Text style={styles.text}>Go End</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.buttonStyle , {right: 20, bottom: 70}]}
        onPress = {EndButtonHandler}
      >
        <Text style={styles.text}>Go Top</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default FlatlistTopBottom;

const styles = StyleSheet.create({

  separator: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#c8c8c8'
  },
  itemStyle: {
    padding: 30,
    fontSize: 20
  },
  buttonStyle: {
    position: 'absolute',
    width: 100,
    height: 50,
    backgroundColor: 'orange',
    alignContent: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    paddingLeft: 20
  }
})