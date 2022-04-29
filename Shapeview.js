import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'

const Shapeview = () => {
    return (
        <ScrollView>
          <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: 'yellow', padding: 10, flexDirection: 'row', justifyContent: 'flex-end' }}>
              <View style={{ width: 50, height: 100, marginHorizontal: 10, backgroundColor: 'purple' }}></View>
              <View style={{ width: 50, height: 100, marginHorizontal: 10, backgroundColor: 'purple' }}></View>
              <View style={{ width: 50, height: 100, marginHorizontal: 10, backgroundColor: 'purple' }}></View>
            </View>
    
            <View style={{ backgroundColor: 'green', padding: 10, flexDirection: 'row', }}>
              <View style={{ width: 50, height: 100, marginHorizontal: 10, backgroundColor: 'purple' }}></View>
              <View style={{ width: 50, height: 100, marginHorizontal: 10, backgroundColor: 'purple' }}></View>
              <View style={{ width: 50, height: 100, marginHorizontal: 10, backgroundColor: 'purple' }}></View>
            </View>
    
            <View style={{ backgroundColor: 'red', padding: 10, flexDirection: 'row', justifyContent: 'center' }}>
              <View style={{ width: 50, height: 100, marginHorizontal: 10, backgroundColor: 'purple' }}></View>
              <View style={{ width: 50, height: 100, marginHorizontal: 10, backgroundColor: 'purple' }}></View>
              <View style={{ width: 50, height: 100, marginHorizontal: 10, backgroundColor: 'purple' }}></View>
            </View>
    
            <View style={{ backgroundColor: 'salmon', flexWrap: 'wrap', padding: 10, flexDirection: 'row', }}>
              <View style={{ width: 50, height: 100, marginHorizontal: 10, backgroundColor: 'purple' }}></View>
              <View style={{ width: 50, height: 100, marginHorizontal: 10, backgroundColor: 'purple' }}></View>
              <View style={{ width: 50, height: 100, marginHorizontal: 10, backgroundColor: 'purple' }}></View>
              <View style={{ width: 50, height: 100, marginHorizontal: 10, backgroundColor: 'purple' }}></View>
              <View style={{ width: 50, height: 100, marginHorizontal: 10, backgroundColor: 'purple' }}></View>
              <View style={{ width: 50, height: 100, margin: 10, backgroundColor: 'purple' }}></View>
            </View>
          </SafeAreaView>
    
          {/* Shapes */}
    
          <View style={styles.firstContainer}>
            <View style={styles.shaperContainer}>
              <View style={styles.square}></View>
            </View>
            <View style={styles.shaperContainer}>
              <View style={styles.rectangle}></View>
            </View>
            <View style={styles.shaperContainer}>
              <View style={styles.circle}></View>
            </View>
            <View style={styles.shaperContainer}>
              <View style={styles.oval}></View>
            </View>
            <View style={styles.shaperContainer}>
              <View style={styles.triangle}></View>
            </View>
            
          </View>
        </ScrollView>
      )
}

export default Shapeview

const styles = StyleSheet.create({

    container: {
      flex: 1,
      // flexDirection: 'row',
      //backgroundColor: 'tomato',
    },
    firstContainer: {
      flex: 1
    },
    shaperContainer: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    square: {
      marginVertical: 20,
      width: 100,
      height: 100,
      backgroundColor: 'green'
    },
    rectangle: {
      marginVertical: 20,
      width: 100 * 2,
      height: 100,
      backgroundColor: 'green'
    },
    circle: {
      width: 150,
      height: 150,
      //backgroundColor: 'green',
      borderRadius: 150 / 2,
      borderWidth: 10,
      borderColor: 'green'
    },
    oval: {
      width: 100,
      height: 100,
      margin: 20,
      backgroundColor: 'green',
      borderRadius: 100 / 2,
      transform: [{ scaleX: 2 }]
    },
    triangle: {
      // width: 0,
      // height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: 60,
      borderRightWidth: 60,
      borderBottomWidth: 120,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'red',
      transform: [{ rotate: '180deg'}]
    }
  })