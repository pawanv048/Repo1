
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, SafeAreaView, TouchableOpacity, Alert, Button } from 'react-native';
//library to format date
import { format } from "date-fns";


const CoffeeAutonomous = ({navigation}) => {

 
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('http://84.16.239.66/api/Release/GetAllReleases');
      const json = await response.json();
      setData(json.Data);  //set data 
      console.log("show"+ response)
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

    <SafeAreaView style={{ flex: 1, padding: 40 }}>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, margin: 24 }}
          //keyExtractor={({ Release_Id }) => Release_Id}
          renderItem={({ item }) => (
            <View style={{
              flex: 1, padding: 24, backgroundColor: 'black', marginBottom: 10,
              borderRadius: 15
            }}>
             
              <TouchableOpacity  onPress={() => navigation.navigate('Detail')}>
                <Text style={{ color: 'white', fontSize: 20 }}>
                  {item.Release_Id}
                  {"\n"}
                  {item.Release_ReleaseTitle}
                  {"\n"}
                  
                  {format(new Date(item.Date),"dd-MM-yyyy")}
                </Text>
              </TouchableOpacity>

            </View>

          )}
        />
      )}
    </SafeAreaView>

  );
};

export default CoffeeAutonomous;