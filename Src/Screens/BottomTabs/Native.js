import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';


export default function () {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <ScrollView>
      <View style={styles.container}>

        <View>
          <ImageBackground
            style={{ width: windowWidth / 1, height: windowWidth / 1 }}
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4SmNGLsQQ2GV5IIFeY_T0MZLvgwLEivv4fg&s" }}>
            <View style={{ margin: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: "600" }}>M2 Water Purifier</Text>
              <Text style={{ fontSize: 17, backgroundColor: "#e0dfd4" }}>10-Stage filteration smartest of 'em all.</Text>
              <View style={{ borderWidth: 1.5, height: 40, width: 120, borderRadius: 10, justifyContent: "center", alignItems: "center", borderColor: "#f5f5f5", backgroundColor: "white", marginTop: 10 }}>
                <Text style={{ color: "black", fontWeight: "500", fontSize: 15 }}>Know more</Text>
              </View>
            </View>

          </ImageBackground>

          
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
})