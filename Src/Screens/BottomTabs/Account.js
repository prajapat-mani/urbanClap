import { View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import EditIcon from "react-native-vector-icons/Feather";
import Ionicon from "react-native-vector-icons/Ionicons";
import Greater from "react-native-vector-icons/MaterialCommunityIcons";
import GiftIcon from "react-native-vector-icons/FontAwesome6";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data = [
  {
    title: "Bookings",
    icon1: "newspaper-outline",
    icon2: "greater-than",
    subArray: [{ title: "Buy" }, { title: "Sell" }, { title: "Other" }]
  },
  {
    title: "Help",
    icon1: "help-circle-outline",
    icon2: "greater-than",
    subArray: [{ title: "FAQ" }, { title: "Support" }, { title: "Contact" }]
  },
  {
    title: "My Rating",
    icon1: "star-outline",
    icon2: "greater-than",
  },
  {
    title: "Wallet",
    icon1: "wallet-outline",
    icon2: "greater-than",
    subArray: [{ title: "Add Funds" }, { title: "Transaction History" }]
    
  },
];
const Account = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handlePress = (index) => {
    setExpandedItem(index === expandedItem ? null : index);
  };

  const renderSubItem = ({ item }) => (
    <View style={styles.subItem}>
      <Text>{item.title}</Text>
    </View>
  );

  const renderItem = ({ item, index }) => (
    <View>
      <TouchableOpacity onPress={() => handlePress(index)}>
        <View style={styles.listItem}>
          <View style={styles.listItemLeft}>
            <Ionicon name={item.icon1} size={25} />
            <Text style={styles.listItemText}>{item.title}</Text>
          </View>
          {item.subArray && (
            <Greater name={item.icon2} size={20} color={"grey"} />
          )}
        </View>
      </TouchableOpacity>
      {expandedItem === index && item.subArray && (
        <FlatList
          data={item.subArray}
          renderItem={renderItem}
          keyExtractor={(subItem, subIndex) => subIndex}
        />
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView nestedScrollEnabled>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.headerTitle}>Verified Customer</Text>
            <Text style={styles.headerSubtitle}>+91 7976059174</Text>
          </View>
          <EditIcon name="edit" size={25} />
        </View>

        <View style={styles.separator} />

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />

        <View style={styles.separator} />

        <View style={styles.referContainer}>
          <View style={styles.referContent}>
            <View>
              <Text style={styles.referTitle}>Refer & earn Rs 100</Text>
              <Text style={styles.referSubtitle}>
                Get Rs 100 when your friend{"\n"}completes their first booking
              </Text>
            </View>
            <GiftIcon name="gift" size={50} color={"#EA08E5"} />
          </View>
          <View style={styles.referButton}>
            <Text style={styles.referButtonText}>Refer Now</Text>
          </View>
        </View>

        <View style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </View>

        <Text style={styles.versionText}>Version 7.5.58 R403</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    margin: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: {},
  headerTitle: {
    fontSize: 30,
    fontWeight: "500",
  },
  headerSubtitle: {
    fontSize: 20,
    fontWeight: "300",
  },
  separator: {
    backgroundColor: "#f5f5f5",
    height: 1,
    width: windowWidth,
  },
  listItem: {
    marginStart: 16,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  listItemText: {
    marginStart: 20,
  },
  subItem: {
    marginStart: 40,
    marginBottom: 10,
  },
  referContainer: {
    backgroundColor: "#c1b9df",
    alignSelf: "center",
    width: windowWidth / 1.1,
    borderRadius: 10,
    padding: 20,
  },
  referContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  referTitle: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
  },
  referSubtitle: {
    fontSize: 15,
    fontWeight: "300",
    marginBottom: 10,
  },
  referButton: {
    justifyContent: "center",
    alignItems: "center",
    height: windowHeight * 0.045,
    width: windowWidth * 0.3,
    backgroundColor: "#441DD0",
    borderRadius: 10,
    alignSelf: "center",
  },
  referButtonText: {
    color: "white",
    fontSize: 15,
  },
  logoutButton: {
    height: windowHeight / 20,
    alignSelf: "center",
    width: windowWidth / 1.1,
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: 'center',
    borderColor: "grey",
  },
  logoutButtonText: {
    color: "red",
  },
  versionText: {
    color: "grey",
    fontSize: 20,
    textAlign: "center",
    marginTop: 30,
  },
});

export default Account;
