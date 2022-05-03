import { 
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ActivityIndicator,
    Image,
    Animated,
    ScrollView
   } from 'react-native'
  import React, { useState, useEffect} from 'react'
  
  const DATA = [
    {
      id: 1,
      name: 'Nikon D3500',
      price: '$200'
    },
    {
      id: 2,
      name: 'Nikon D3500',
      price: '$200'
    },
    {
      id: 3,
      name: 'Nikon D3500',
      price: '$200'
    },
    {
      id: 4,
      name: 'Nikon D3500',
      price: '$200'
    },
    {
      id: 5,
      name: 'Nikon D3500',
      price: '$200'
    },
    {
      id: 6,
      name: 'Nikon D3500',
      price: '$200'
    },
    {
      id: 7,
      name: 'Nikon D3500',
      price: '$200'
    }
  ]
  
  
  const BG_IMG = '#E9EAEF';
  const ITEM_MARGIN_BOTTOM = 20;
  const ITEM_PADDING = 10;
  const HEIGHT_IMG = 99;
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
          />
          <View style={styles.warpText}>
            <Text style={styles.fontSize}>{item.name}</Text>
            <Text style={styles.fontSize}>{item.price}</Text>
          </View>
        </Animated.View>
      )
    }
  
    return (
      <SafeAreaView style={styles.container}>
        
        <Image
          source={{ uri: BG_IMG}}
          style={StyleSheet.absoluteFillObject}
          blurRadius={40}
        />
        {isLoading ? <ActivityIndicator/> : (
          <Animated.FlatList 
            
            data = {DATA}
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
      fontSize: 15,
      paddingBottom: 3
    },
    image: {
      width: 100,
      height: HEIGHT_IMG,
      borderRadius: 5,
      resizeMode: 'contain'
    },
    warpText: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingLeft: 20
    },
    item: {
      flexDirection: 'row',
      marginBottom: ITEM_MARGIN_BOTTOM,
      borderRadius: 10,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5
      },
      shadowOpacity: .2,
      shadowRadius: 10,
      padding: ITEM_PADDING
    } 
  })