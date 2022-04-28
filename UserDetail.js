import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react';



const App = () => {
    return (
        <ScrollView>
            <View style={styles.container} >
                <View style={styles.img}>
                    <Image
                        source={require('../assets/images/MusicTrack.jpeg')}
                        style={{ width: 150, height: 150 }}
                    />
                </View>
                <View style={styles.inputTxt}>
                    <TextInput
                        style={[styles.details, styles.topCurve]}
                        placeholder="First Name"
                        placeholderTextColor={"#9F9F9F"}
                    />
                    <TextInput
                        style={[styles.details, styles.bottomCurve]}
                        placeholder="Last Name"
                        placeholderTextColor={"#9F9F9F"}
                    />
                    <TextInput
                        style={[styles.details, styles.topCurve]}
                        placeholder="Email"
                        placeholderTextColor={"#9F9F9F"}
                    />
                    <TextInput
                        style={[styles.details, styles.bottomCurve]}
                        placeholder="Password"
                        placeholderTextColor={"#9F9F9F"}
                    />
                </View>

                <TouchableOpacity style={styles.createBtn}>

                    <Text style={styles.buttonText}>
                        Create an Account
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.arrowBtn}>
                    <Image source={require("../assets/icons/back.png")}
                        style={{ width: 30, height: 30 }} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FCFD',
        paddingTop: 40
    },
    details: {
        paddingLeft: 260,
        marginTop: 12,
        width: "90%",
        height: 50,
        backgroundColor: "white",
        shadowOpacity: 0.1,
        shadowColor: '#000000',
        shadowOffset: {
            width: 3,
            height: 3
        }
    },
    img: {
        marginTop: 100,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputTxt: {
        marginVertical: 40
    },
    topCurve: {
        borderTopRightRadius: 20
    },
    bottomCurve: {
        borderBottomRightRadius: 20
    },
    createBtn: {
        width: "65%",
        height: 55,
        backgroundColor: '#FF5F63',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 70,
        borderRadius: 40
    },
    createTxt: {
        color: 'white',
        fontSize: 16
    },
    arrowBtn: {
        width: 60,
        height: 60,
        backgroundColor: '#00ABEF',
        marginHorizontal: 160,
        marginVertical: 20,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }

})
