import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import smartLockImage from "../../Assets/smart-locks.png"
import { Dimensions } from 'react-native';
import SearchIcon from "react-native-vector-icons/Ionicons"
import L1pro from "../../Assets/1715414579845-6ecc57.webp"
import A1pro from "../../Assets/1715414569554-1f82db.webp"




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SmartLock() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <Image source={smartLockImage} style={{ width: windowWidth / 1, height: windowWidth / 2, }} />
                <View style={styles.subContainer}>
                    <Text style={{ fontSize: 25, fontWeight: "700" }}>Smart Locks</Text>

                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                        <SearchIcon color={"grey"} name="star" size={15} />
                        <Text style={{ marginLeft: 20, fontSize: 15, textDecorationLine: "underline" }}>4.83 (2k bookings)</Text>
                    </View>
                    <View style={{ borderWidth: 1, width: "70%", borderRadius: 10, borderColor: "grey", marginTop: 20, justifyContent: "center", padding: 10 }}>

                        <Text style={{ fontSize: 17 }}>CRED cashback up to ₹500</Text>
                        <Text style={{ color: "grey" }}>cashback up to ₹500 via CR</Text>
                    </View>


                </View>
                <View style={styles.seperator}></View>

                <View style={{ justifyContent: "space-between", flexDirection: "row", margin: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: "500" }}>Door Lock</Text>
                    <Text style={{ fontSize: 15, color: "blue" }}>Know more </Text>
                </View>


                <View style={{}}>
                    <Image style={{ width: windowWidth / 1.1, height: windowWidth / 2, alignSelf: "center", resizeMode: "contain", borderRadius: 20 }} source={L1pro} />
                    <View style={{ margin: 25 }}>
                        <Text style={{ color: "green" }}>FREE INSTALLATION</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 20, fontWeight: "600" }}>Native L1 Pro . 5 Way{"\n"}unlock with camera</Text>
                            <View style={{ borderWidth: 1.5, height: 35, width: 90, borderRadius: 10, justifyContent: "center", alignItems: "center", borderColor: "#f5f5f5" }}>
                                <Text style={{ color: "blue" }}>Add</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                            <SearchIcon color={"grey"} name="star" size={15} />
                            <Text style={{ marginLeft: 5, fontSize: 15, textDecorationLine: "underline" }}>4.83 (2k bookings)</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                            <Text>13,999</Text>
                            <View style={{ height: 5, width: 5, backgroundColor: "black", borderRadius: 5, marginHorizontal: 10 }}>

                            </View>
                            <Text>5 mins</Text>
                        </View>


                        <View style={{ borderWidth: 2, borderColor: "#f5f5f5", borderStyle: "dotted", marginVertical: 10 }}></View>

                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={{ height: 5, width: 5, backgroundColor: "grey", borderRadius: 5, marginRight: 10 }}>

                            </View>
                            <Text style={{ color: "grey" }}>View recognise & give access to familiar faces with
                            </Text>
                        </View>
                        <Text style={{ marginLeft: 15, color: "grey" }}>the new camera feature</Text>

                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={{ height: 5, width: 5, backgroundColor: "grey", borderRadius: 5, marginRight: 10 }}>

                            </View>
                            <Text style={{ color: "grey" }}>View recognise & give access to familiar faces with
                            </Text>
                        </View>
                        <Text style={{ marginLeft: 15, color: "grey" }}>the new camera feature</Text>
                    </View>

                    <Text style={{ color: "blue", fontSize: 20, margin: 20 }}>View details</Text>
                </View>

                <View style={{ borderWidth: 1, borderColor: "#f5f5f5", marginVertical: 10, marginHorizontal: 20 }}></View>


                <View style={{}}>
                    <Image style={{ width: windowWidth / 1.1, height: windowWidth / 2, alignSelf: "center", resizeMode: "contain", borderRadius: 20 }} source={A1pro} />
                    <View style={{ margin: 25 }}>
                        <Text style={{ color: "green" }}>FREE INSTALLATION</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 20, fontWeight: "600" }}>Native A1 Pro . Fingerprint,{"\n"}passcode & key</Text>
                            <View style={{ borderWidth: 1.5, height: 35, width: 90, borderRadius: 10, justifyContent: "center", alignItems: "center", borderColor: "#f5f5f5" }}>
                                <Text style={{ color: "blue" }}>Add</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                            <SearchIcon color={"grey"} name="star" size={15} />
                            <Text style={{ marginLeft: 5, fontSize: 15, textDecorationLine: "underline" }}>4.83 (2k bookings)</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                            <Text>13,999</Text>
                            <View style={{ height: 5, width: 5, backgroundColor: "black", borderRadius: 5, marginHorizontal: 10 }}>

                            </View>
                            <Text>5 mins</Text>
                        </View>


                        <View style={{ borderWidth: 2, borderColor: "#f5f5f5", borderStyle: "dotted", marginVertical: 10 }}></View>

                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={{ height: 5, width: 5, backgroundColor: "grey", borderRadius: 5, marginRight: 10 }}>

                            </View>
                            <Text style={{ color: "grey" }}>View recognise & give access to familiar faces with
                            </Text>
                        </View>
                        <Text style={{ marginLeft: 15, color: "grey" }}>the new camera feature</Text>

                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={{ height: 5, width: 5, backgroundColor: "grey", borderRadius: 5, marginRight: 10 }}>

                            </View>
                            <Text style={{ color: "grey" }}>View recognise & give access to familiar faces with
                            </Text>
                        </View>
                        <Text style={{ marginLeft: 15, color: "grey" }}>the new camera feature</Text>
                    </View>

                    <Text style={{ color: "blue", fontSize: 20, margin: 20 }}>View details</Text>
                </View>

                <View style={{ borderWidth: 1, borderColor: "#f5f5f5", marginVertical: 10, marginHorizontal: 20 }}></View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",

    },
    subContainer: {
        margin: 20,
        // borderWidth:2,
        // borderColor:"black",
        // height:windowHeight*.20
    },
    seperator: {
        backgroundColor: "#f5f5f5",
        height: windowHeight * 0.009,
        width: windowWidth * 1
    },

})