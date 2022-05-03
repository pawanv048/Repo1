import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';


let shadowOpacity = 0.3;
//code: '#1abc9c'
//https://raw.githubusercontent.com/ivanoff/react-native-ico-shopping/HEAD/static/shopping-cart-1.png
export default function Example() {
  const [items, setItems] = React.useState([
    { name: 'Buying', code: '#A945F3' },
    { name: 'Selling', code: 'white' },
    { name: 'Trades', code: 'white' },
    { name: 'Videos', code: 'white' },  
    { name: 'Deals', code: 'white' },
    { name: 'Case Study', code: 'white' },
    
  ]);

  return (

    <SafeAreaView style= {styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Choose Your area</Text>
      </View>
      <FlatGrid
        itemDimension={130}
        data={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={15}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}> 
            <Image source={require('../assets/icons/user_icon.png',)}
                style={{ tintColor: 'blue'}}
            />
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
        )}
      />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7F9'
  },
  header: {
    marginTop: 20,
    paddingLeft: 20
  },
  title: {
    fontSize: 20,
    fontWeight: '500'
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    height: 165,
    backgroundColor: 'white',
    shadowOpacity: 0.6,
    shadowColor: 'grey',
    shadowOffset: {
      height: 10,
      width: 2
    },
    shadowRadius: 10
  },
  itemName: {
    fontSize: 14,
    paddingTop: 10,
    color: 'black',
    fontWeight: '100',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});