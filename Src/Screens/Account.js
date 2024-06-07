import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import EditIcon from "react-native-vector-icons/Feather"
import { Dimensions } from 'react-native';
import Ionicon from "react-native-vector-icons/Ionicons"
import Greater from "react-native-vector-icons/MaterialCommunityIcons"
import GiftIcon from "react-native-vector-icons/FontAwesome6"




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Account() {


  return (
    <SafeAreaView style={styles.contanier}>
      <ScrollView >
        <View style={styles.subContanier}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View>
              <Text style={{ fontSize: 30, fontWeight: "500" }}>Verified Customer</Text>
              <Text style={{ fontSize: 20, fontWeight: "300" }}>+91 7976059174</Text>
            </View>
            <View>
              <EditIcon name="edit" size={25} />
            </View>

          </View>
        </View>

        <View style={styles.seperator}></View>

        <View style={{ marginStart: 16, justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicon name="newspaper-outline" size={25}></Ionicon>
            <Text style={{ marginStart: 20 }}>My Bookings</Text>
          </View>
          <View>
            <Greater name="greater-than" size={20} color={"grey"} />
          </View>
        </View>

        <View style={{ marginStart: 16, justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicon name="newspaper-outline" size={25}></Ionicon>
            <Text style={{ marginStart: 20 }}>Help Center</Text>
          </View>
          <View>
            <Greater name="greater-than" size={20} color={"grey"} />
          </View>
        </View>

        <View style={{ marginStart: 16, justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicon name="newspaper-outline" size={25}></Ionicon>
            <Text style={{ marginStart: 20 }}>Native devices</Text>
          </View>
          <View>
            <Greater name="greater-than" size={20} color={"grey"} />
          </View>
        </View>

        <View style={{ marginStart: 16, justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicon name="newspaper-outline" size={25}></Ionicon>
            <Text style={{ marginStart: 20 }}>Wallet</Text>
          </View>
          <View>
            <Greater name="greater-than" size={20} color={"grey"} />
          </View>
        </View>

        <View style={{ marginStart: 16, justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicon name="newspaper-outline" size={25}></Ionicon>
            <Text style={{ marginStart: 20 }}>Plus membership</Text>
          </View>
          <View>
            <Greater name="greater-than" size={20} color={"grey"} />
          </View>
        </View>

        <View style={{ marginStart: 16, justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicon name="newspaper-outline" size={25}></Ionicon>
            <Text style={{ marginStart: 20 }}>My rating</Text>
          </View>
          <View>
            <Greater name="greater-than" size={20} color={"grey"} />
          </View>
        </View>

        <View style={{ marginStart: 16, justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicon name="newspaper-outline" size={25}></Ionicon>
            <Text style={{ marginStart: 20 }}>Manage addresses</Text>
          </View>
          <View>
            <Greater name="greater-than" size={20} color={"grey"} />
          </View>
        </View>

        <View style={{ marginStart: 16, justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicon name="newspaper-outline" size={25}></Ionicon>
            <Text style={{ marginStart: 20 }}>Manage payment method</Text>
          </View>
          <View>
            <Greater name="greater-than" size={20} color={"grey"} />
          </View>
        </View>

        <View style={{ marginStart: 16, justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicon name="newspaper-outline" size={25}></Ionicon>
            <Text style={{ marginStart: 20 }}>Settings</Text>
          </View>
          <View>
            <Greater name="greater-than" size={20} color={"grey"} />
          </View>
        </View>

        <View style={{ marginStart: 16, justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicon name="newspaper-outline" size={25}></Ionicon>
            <Text style={{ marginStart: 20 }}>Schedualed bookings</Text>
          </View>
          <View>
            <Greater name="greater-than" size={20} color={"grey"} />
          </View>
        </View>

        <View style={{ marginStart: 16, justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicon name="newspaper-outline" size={25}></Ionicon>
            <Text style={{ marginStart: 20 }}>About UC</Text>
          </View>
          <View>
            <Greater name="greater-than" size={20} color={"grey"} />
          </View>
        </View>

        <View style={{ height: windowHeight / 5.5, backgroundColor: "#c1b9df", alignSelf: "center", width: windowWidth / 1.1, borderRadius: 10 }}>

          <View style={{ margin: 20 }}>
            <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
              <View >
                <Text style={{ fontSize: 20, fontWeight: "500", marginBottom: 10 }}>Refer & earn rs100</Text>
                <Text style={{ fontSize: 15, fontWeight: "300", marginBottom: 10 }}>Get rs 100 when your friend {"\n"}completes their first booking</Text>

              </View>
              <View style={{ marginRight: 10 }}>
                <GiftIcon name="gift" size={50} color={"#EA08E5"} />
              </View>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center", height: windowHeight * 0.045, width: windowWidth * 0.3, backgroundColor: "#441DD0", borderRadius: 10 }}>
              <Text style={{ color: "white", fontSize: 15 }}>Refer Now</Text>
            </View>
          </View>
        </View>

        <View style={{ height: windowHeight / 20, alignSelf: "center", width: windowWidth / 1.1, borderRadius: 10,marginTop:20,borderWidth:1,alignItems:"center",justifyContent:'center',borderColor:"grey" }}>
          <Text style={{color:"red"}}>Logout</Text>
          </View>
<Text style={{color:"grey", fontSize:20,textAlign:"center", marginTop:30}}>Version 7.5.58 R403</Text>

      </ScrollView>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: "white"
  },
  subContanier: {
    margin: 16
  },
  seperator: {
    backgroundColor: "#f5f5f5",
    marginVertical: 20,
    height: windowHeight * 0.009,
    width: windowWidth * 1
  },

})