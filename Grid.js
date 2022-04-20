import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    FlatList,
    Dimensions
  } from 'react-native';
import React from 'react';


const dataList = [{key: '1'},{key: '2'},{key: '3'},{key: '4'},{key: '5'},{key: '6'},
            {key: '7'},{key: '8'},{key: '9'},{key: '10'},{key: '11'},{key: '12'},
            {key: '13'},{key: '14'},{key: '15'}
]

const numColumns = 2
const WIDTH = Dimensions.get('window').width

const Task = () => {
    formatData = (dataList, numColumns) => {
        const totalRows = Math.floor(dataList.length / numColumns)
        let totalLastRows = dataList.length - (totalRows * numColumns)
    
        while (totalLastRows !== 0 && totalLastRows !== numColumns) {
          dataList.push({key: 'blank', empty: true})
          totalLastRows++
        }
    
        return dataList
      }
    
    
      
      _renderItem = ({item, index}) => {
       
        return(
          <View style={styles.item}>
            <Text style={styles.itemsText}>{item.key}</Text>
          </View>
        )
    
        if(item.empty) {
          return <View style={[itemStyle, itemInvisible ]}/>
        }
      }
     
      return (
    
          <SafeAreaView style={styles.container}>
            <FlatList
              data={this.formatData(dataList,numColumns)}
              renderItem={this._renderItem}
              keyExtractor={(item, index) => index.toString()}
              numColumns={numColumns}
            />
          </SafeAreaView>
    
      )
}

export default Task

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAE8ED',
        paddingTop: 40
      },
      itemsText: {
        color: '#fff',
        fontSize: 30
      },
      item: {
        flex: 1,
        backgroundColor: '#3232ff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        margin: 1,
        height: WIDTH / numColumns
      },
      itemInvisible: {
        backgroundColor: 'transparent'
      }
})