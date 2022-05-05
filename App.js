import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';
import { Searchbar } from 'react-native-paper';

const DATA = [
  {
    id: 1,
    name: 'Network & Internet',
    price: 'Wi-Fi, Mobile, Data Usage, Hotspot',
    icon: require('./assets/icons/wifi-signal.png')
  },
  {
    id: 2,
    name: 'Connect devices',
    price: 'Bluetooth',
    icon: require('./assets/icons/connect.png')
  },
  {
    id: 3,
    name: 'App & Notification',
    price: 'Permissions default apps',
    icon: require('./assets/icons/notification-bell.png')
  },
  {
    id: 4,
    name: 'Battery',
    price: 'Power Saving mode, Battery usage',
    icon: require('./assets/icons/battery.png')
  },
  {
    id: 5,
    name: 'Display',
    price: 'Wallpaper, sleep, font size',
    icon: require('./assets/icons/display.png')
  },
  {
    id: 6,
    name: 'Home screen style',
    price: 'Wallpaper, sleep, font size',
    icon: require('./assets/icons/home.png')
  },
  {
    id: 7,
    name: 'Sound',
    price: 'Volume, vibration, Do not disturb',
    icon: require('./assets/icons/sound.png')
  },
  {
    id: 8,
    name: 'Storage',
    price: '97% used - 462 MB free',
    icon: require('./assets/icons/storage.png')
  },
  {
    id: 9,
    name: 'Security & location',
    price: 'Screen lock',
    icon: require('./assets/icons/secured.png')
  },
  {
    id: 10,
    name: 'User & accounts',
    price: 'Current user: Owner',
    icon: require('./assets/icons/user.png')
  },
  {
    id: 11,
    name: 'Accessibility',
    price: 'Screeb readersmsidplay, interaction controls',
    icon: require('./assets/icons/access.png')
  },
  {
    id: 12,
    name: 'Google',
    price: 'Services & Preferences',
    icon: require('./assets/icons/google.png')
  },
  {
    id: 13,
    name: 'System',
    price: 'Languages,time,backup,updates',
    icon: require('./assets/icons/system.png')
  },
]

const Separator = () => (
  <View style={styles.separator} />
);

renderItem = ({ item, index }) => {
  return (
    <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'lightgrey'}}>
      <TouchableOpacity style={styles.warpText}>
        <Image source={item.icon} style={[{ width: 30, height: 30 }]} />
        <View style={{ flexDirection: 'column', paddingLeft: 20 }}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>

        <View style={{ alignItems: 'center', marginLeft: 'auto' }}>
          <Image source={require('./assets/icons/rightarrow.png')}
            style={{ tintColor: 'lightgrey', width: 15, height: 15 }}
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const Settings = () => {


  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View>
        <Text style={styles.header}>Settings</Text>
      </View>
      <Separator />

      <Searchbar
        style={styles.search}
        placeholder="Search Settings"
        iconColor='lightgrey'
      />

      {/* Settings content */}
      <FlatList

        data={DATA}
        KeyExtractor={item => `key-${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          padding: 20
        }}

      />

    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({

  header: {
    fontSize: 25,
    fontWeight: '400',
    padding: 10
  },
  separator: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderWidth: 0.3,

  },
  search: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    shadowOpacity: 0.0,
    borderRadius: 30,
    backgroundColor: 'lightgrey',
    height: 35
  },
  item: {
    flexDirection: 'row',
    margin: 20,
    backgroundColor: 'red',
    height: 50
  },
  warpText: {
    paddingTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    //backgroundColor: 'blue'
  },
  fontSize: {
    // paddingLeft: 20,
    fontSize: 20
  },
  name: {
    fontSize: 18,
    marginBottom: 5
  },
  price: {
    paddingBottom: 10,
    color: 'darkgrey'
  }

})