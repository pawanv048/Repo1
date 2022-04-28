import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity
} from 'react-native'
import React from 'react'

const Settings = () => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                {/* Headers */}
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Image source={require("../assets/icons/back_icon.png")}
                            style={{ width: 25, height: 25, tintColor: '#4F4964' }}
                        />
                    </TouchableOpacity>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarTxt}>R</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.settingsTxt}>Settings</Text>
                </View>


                {/* Settings info */}
                <View style={styles.info}>
                    <TouchableOpacity style={styles.subInfo}>
                        <View style={[styles.user, styles.userColor]}>
                            <Image source={require("../assets/icons/user_icon.png")}
                                style={{ width: 20, height: 20, tintColor: 'white' }} />
                        </View>
                        <Text style={styles.accTxt}>Account</Text>
                        <View style={styles.arrow}>
                            <Image source={require("../assets/icons/indicator_icon.png")}
                                style={{ width: 12, height: 12, tintColor: 'grey' }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.subInfo}>
                        <View style={[styles.user, styles.notifyColor]}>
                            <Image source={require("../assets/icons/user_icon.png")}
                                style={{ width: 20, height: 20, tintColor: 'white' }} />
                        </View>
                        <Text style={styles.accTxt}>Notification</Text>
                        <View style={styles.arrow}>
                            <Image source={require("../assets/icons/indicator_icon.png")}
                                style={{ width: 12, height: 12, tintColor: 'grey' }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.subInfo}>
                        <View style={[styles.user, styles.privacyColor]}>
                            <Image source={require("../assets/icons/user_icon.png")}
                                style={{ width: 20, height: 20, tintColor: 'white' }} />
                        </View>
                        <Text style={styles.accTxt}>Privacy</Text>
                        <View style={styles.arrow}>
                            <Image source={require("../assets/icons/indicator_icon.png")}
                                style={{ width: 12, height: 12, tintColor: 'grey' }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.subInfo}>
                        <View style={[styles.user, styles.helpColor]}>
                            <Image source={require("../assets/icons/user_icon.png")}
                                style={{ width: 20, height: 20, tintColor: 'white' }} />
                        </View>
                        <Text style={styles.accTxt}>Help center</Text>
                        <View style={styles.arrow}>
                            <Image source={require("../assets/icons/indicator_icon.png")}
                                style={{ width: 12, height: 12, tintColor: 'grey' }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.subInfo}>
                        <View style={[styles.user, styles.genColor]}>
                            <Image source={require("../assets/icons/user_icon.png")}
                                style={{ width: 20, height: 20, tintColor: 'white' }} />
                        </View>
                        <Text style={styles.accTxt}>General</Text>
                        <View style={styles.arrow}>
                            <Image source={require("../assets/icons/indicator_icon.png")}
                                style={{ width: 12, height: 12, tintColor: 'grey' }} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.subInfo}>
                        <View style={[styles.user, styles.aboutColor]}>
                            <Image source={require("../assets/icons/user_icon.png")}
                                style={{ width: 20, height: 20, tintColor: 'white' }} />
                        </View>
                        <Text style={styles.accTxt}>About us</Text>
                        <View style={styles.arrow}>
                            <Image source={require("../assets/icons/indicator_icon.png")}
                                style={{ width: 12, height: 12, tintColor: 'grey' }} />
                        </View>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </>

    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 10,
        alignItems: 'center'
    },
    avatar: {
        backgroundColor: '#FF75AA',
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginHorizontal: 120
    },
    userColor: {
        backgroundColor: '#FF54B3'
    },
    notifyColor: {
        backgroundColor: '#FF18B4'
    },
    privacyColor: {
        backgroundColor: '#7F65FF'
    },
    helpColor: {
        backgroundColor: '#119BFF'
    },
    genColor: {
        backgroundColor: '#00D513'
    },
    aboutColor: {
        backgroundColor: '#FF7E2E'
    },

    avatarTxt: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    settingsTxt: {
        margin: 20,
        marginLeft: 25,
        fontSize: 25,
        fontWeight: '500',
        color: '#7E7A8D'
    },
    info: {
        marginVertical: 40
    },
    subInfo: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
        marginBottom: 25,

    },
    user: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    accTxt: {
        paddingLeft: 30,
        fontSize: 17,
        color: '#7B768A',
        fontWeight: '600'
    },
    arrow: {
        marginLeft: 'auto',
        
    }
})