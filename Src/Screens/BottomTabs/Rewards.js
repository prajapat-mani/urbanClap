// src/Rewards.js
import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Whatsapp from "react-native-vector-icons/FontAwesome";
import Messenger from "react-native-vector-icons/Fontisto";
import CopyText from "react-native-vector-icons/Fontisto";
import GiftIcon from "react-native-vector-icons/FontAwesome6"

const Rewards = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.titleText}>Refer and get Free{"\n"}services</Text>
        <Text style={styles.descriptionText}>
          Invite Your Friends to try Urban{"\n"}Company Service. They get Instant{"\n"}100rs Off. You win 100rs once they take.
        </Text>
        <Text style={styles.centeredText}>
          ................................Refer Via...................................
        </Text>
        <View style={styles.iconsContainer}>
          <View style={styles.iconWrapper}>
            <Whatsapp name="whatsapp" size={35} color={"green"} />
          </View>
          <View style={styles.iconWrapper}>
            <Messenger name="messenger" size={35} color={"#0b90f7"} />
          </View>
          <View style={styles.iconWrapper}>
            <CopyText name="link" size={30} color={"#0274f7"} />
          </View>
        </View>
      </View>
      <View style={styles.redBox}>
        <Text style={styles.footerText}>How It Works?</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ alignItems: "flex-start" }}>
            <View style={{ justifyContent: "center", alignItems: "center", marginLeft: 10 }}>



              <View style={{ backgroundColor: "grey", height: 20, width: 20, borderRadius: 15, justifyContent: "center", alignItems: "center" }}>
                <Text>1</Text>
              </View>
              <View style={{ backgroundColor: "grey", height: 40, width: 2, }}></View>
              <View style={{ backgroundColor: "grey", height: 20, width: 20, borderRadius: 15, justifyContent: "center", alignItems: "center" }}>
                <Text>2</Text>
              </View>
              <View style={{ backgroundColor: "grey", height: 40, width: 2, }}></View>



              <View style={{ backgroundColor: "grey", height: 20, width: 20, borderRadius: 15, justifyContent: "center", alignItems: "center" }}>
                <Text>3</Text>
              </View>


            </View>



          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ marginStart: 10, marginBottom: 45 }}>Invite Your Friends & Get Rewarded</Text>
            <Text style={{ marginStart: 10, marginBottom: 43 }}>They Get rs100 on their first service</Text>

            <Text style={{ marginStart: 10 }}>You get rs 100 once their service is {"\n"}completed</Text>
          </View>



        </View>

      </View>
      <View style={{ margin: 25, flexDirection: "row", alignItems: "center" }}>
        <View style={{ height: 5, width: 5, backgroundColor: "blue", borderRadius: 5 }}>

        </View>
        <Text style={{ color: "blue", marginLeft: 10 }}>Tearms And Condition</Text>

        <View style={{ height: 5, width: 5, backgroundColor: "blue", borderRadius: 5, marginStart: 30 }}>

        </View>
        <Text style={{ color: "blue", marginLeft: 10 }}>FAQs</Text>


      </View>

      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>You are yet to earn any scratch {"\n"}cards</Text>
        <Text style={{ color: 'grey' }}>Start refering to get surprises</Text>
      </View>

      <View style={{ borderWidth: 0.5, borderStyle: "dashed", width: "100%", borderColor: "grey" }}></View>

      <View style={{ flexDirection: "row", alignItems: "center", margin: 20 }}>
        <GiftIcon name="gift" size={25} color={"orange"} />
        <Text style={{ marginStart: 20 }}>Earn rs 100 on Everysuccessful referal</Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  subContainer: {
    padding: 16,
    backgroundColor: "#99B3EA",
    // borderRadius: 8,
    // margin: 16,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    // textAlign: 'center',
    marginBottom: 16,
  },
  descriptionText: {
    // textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  centeredText: {
    textAlign: "center",
    marginVertical: 30,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  iconWrapper: {
    height: 50,
    width: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  redBox: {
    backgroundColor: "#99B3EA",
    height: 250,
    margin: 20,
    borderRadius: 8,
  },
  footerText: {
    // textAlign: 'center',
    fontSize: 20,
    fontWeight: "500",
    margin: 16,
  },
});

export default Rewards;
