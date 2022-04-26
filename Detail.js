import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  //http://84.16.239.66/api/Release/GetReleasesDetails?ReleaseId=77763
  const getMovies = async () => {
    try {
      const response = await fetch('http://84.16.239.66/api/Release/GetReleasesDetails?ReleaseId=77763');
      const json = await response.json();
      setData(json.Data);  //set data
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
        <View style={{ alignItems: 'center', marginBottom: 20}}>
            <Text style={{ fontSize: 24, fontWeight: 'bold'}}>Release Detail</Text>
        </View>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
              
              <View style={styles.container}>
                  <Text>{item.Release.Release_Id} </Text>
                  <Text>{item.Release.Release_PrimaryArtist}</Text>
                  <Text>{item.Release.Release_ReleaseTitle}</Text>
                  <Text>{item.Release.Release_CatNumber}</Text>
                  <Text>{item.Release.Release_SubGenre}</Text>       
              </View>
            
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        margin: 10,
        padding: 10
    }
})

