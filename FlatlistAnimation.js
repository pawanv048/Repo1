import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  Image,
  Animated
 } from 'react-native'
import React, { useState, useEffect} from 'react'


const BG_IMG = 'https://cdn.pixabay.com/photo/2020/04/12/17/29/little-prague-5035113_960_720.jpg';
const ITEM_MARGIN_BOTTOM = 20;
const ITEM_PADDING = 10;
const HEIGHT_IMG = 100;
const ITEM_SIZE = HEIGHT_IMG + ITEM_PADDING * 2 + ITEM_MARGIN_BOTTOM;
const Grid = () => {

  const scrollY = React.useRef(new Animated.Value(0)).current;
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(true);

useEffect(() => {
  getListPhotos(); 
  return () => {
    
  }
},[])


//https://jsonplaceholder.typicode.com/photos
  getListPhotos = () => {
    const apiURL = 'https://jsonplaceholder.typicode.com/photos';
    fetch(apiURL)
    .then((res) => res.json())
    .then((resJson) => {
      setdata(resJson)
    }).catch((error) => {
      console.log('Request API Error: ', error);
    }).finally(() => setisLoading(false))
    
  }

  renderItem = ({item, index}) => {
    const scale = scrollY.interpolate({
      inputRange: [
        -1, 0,
        ITEM_SIZE * index,
        ITEM_SIZE * (index + 2)
      ],
      outputRange: [1,1,1,0]
    })
    const opacity = scrollY.interpolate({
      inputRange: [
        -1, 0,
        ITEM_SIZE * index,
        ITEM_SIZE * (index + .6)
      ],
      outputRange: [1, 1, 1, 0]
    })
    return(
      <Animated.View style={[
        styles.item,
        {
          transform: [{scale}],
          opacity
        }
        ]}>
        <Image 
            style={styles.image}
            source={{uri: item.url}}
            resizeMode= 'contain'
        />
        <View style={styles.warpText}>
          <Text style={styles.fontSize}> {index + '. ' + item.title}</Text>
        </View>
      </Animated.View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: BG_IMG}}
        style={StyleSheet.absoluteFillObject}
        blurRadius={0}
      />
      {isLoading ? <ActivityIndicator/> : (
        <Animated.FlatList 
          data = {data}
          KeyExtractor={item => `key-${item.id}`}
          renderItem={renderItem}
          contentContainerStyle= {{
            padding: 20
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: {y: scrollY} } }],
            { useNativeDriver: true } // Add this line
          )}
      />
    )}
     
    </SafeAreaView>
  );
}; 

export default Grid

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  fontSize: {
    fontSize: 18
  },
  image: {
    width: 100,
    height: HEIGHT_IMG
  },
  warpText: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center'
  },
  item: {
    flexDirection: 'row',
    marginBottom: ITEM_MARGIN_BOTTOM,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: .3,
    shadowRadius: 20,
    padding: ITEM_PADDING
  } 
})
