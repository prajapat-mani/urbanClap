import { FlatList, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
import SearchIcon from "react-native-vector-icons/Ionicons"
import HeartIcon from "react-native-vector-icons/AntDesign"
import Greater from "react-native-vector-icons/MaterialCommunityIcons"



export default function SpaForWomen() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const data = [
        {
            Image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1681973778728-aebf78.jpeg",
            title: "Top to toe stress relief massage", rating: "4.85(32.6 reviews)", price: "₹ 1,899", desc1: "Kneading of thighs & calves. Palm circles & thumb sliding over knees & gentle toe pulling", desc2: "Palm sliding & kneading of full arms & shoulders. Massage of biceps, triceps & wrist rotation."
        },
        {
            Image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1715686912755-51359a.jpeg",
            title: "Top to toe stress relief massage", rating: "4.85(32.6 reviews)", price: "₹ 1,899", desc1: "Kneading of thighs & calves. Palm circles & thumb sliding over knees & gentle toe pulling", desc2: "Palm sliding & kneading of full arms & shoulders. Massage of biceps, triceps & wrist rotation."
        },
        {
            Image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1681975153288-435f0a.jpeg",
            title: "Top to toe stress relief massage", rating: "4.85(32.6 reviews)", price: "₹ 1,899", desc1: "Kneading of thighs & calves. Palm circles & thumb sliding over knees & gentle toe pulling", desc2: "Palm sliding & kneading of full arms & shoulders. Massage of biceps, triceps & wrist rotation."
        },
        {
            Image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1706002331674-3bbbd5.jpeg",
            title: "Top to toe stress relief massage", rating: "4.85(32.6 reviews)", price: "₹ 1,899", desc1: "Kneading of thighs & calves. Palm circles & thumb sliding over knees & gentle toe pulling", desc2: "Palm sliding & kneading of full arms & shoulders. Massage of biceps, triceps & wrist rotation."
        },
        {
            Image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1681981718912-7bde2d.jpeg",
            title: "Top to toe stress relief massage", rating: "4.85(32.6 reviews)", price: "₹ 1,899", desc1: "Kneading of thighs & calves. Palm circles & thumb sliding over knees & gentle toe pulling", desc2: "Palm sliding & kneading of full arms & shoulders. Massage of biceps, triceps & wrist rotation."
        },
        {
            Image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682072474396-a7010d.jpeg",
            title: "Top to toe stress relief massage", rating: "4.85(32.6 reviews)", price: "₹ 1,899", desc1: "Kneading of thighs & calves. Palm circles & thumb sliding over knees & gentle toe pulling", desc2: "Palm sliding & kneading of full arms & shoulders. Massage of biceps, triceps & wrist rotation."
        },
        {
            Image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1715857236629-bdd747.jpeg",
            title: "Top to toe stress relief massage", rating: "4.85(32.6 reviews)", price: "₹ 1,899", desc1: "Kneading of thighs & calves. Palm circles & thumb sliding over knees & gentle toe pulling", desc2: "Palm sliding & kneading of full arms & shoulders. Massage of biceps, triceps & wrist rotation."
        },
        {
            Image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1681999611967-1060b9.jpeg",
            title: "Top to toe stress relief massage", rating: "4.85(32.6 reviews)", price: "₹ 1,899", desc1: "Kneading of thighs & calves. Palm circles & thumb sliding over knees & gentle toe pulling", desc2: "Palm sliding & kneading of full arms & shoulders. Massage of biceps, triceps & wrist rotation."
        },
        {
            Image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1682000530944-ab5cf6.jpeg",
            title: "Top to toe stress relief massage", rating: "4.85(32.6 reviews)", price: "₹ 1,899", desc1: "Kneading of thighs & calves. Palm circles & thumb sliding over knees & gentle toe pulling", desc2: "Palm sliding & kneading of full arms & shoulders. Massage of biceps, triceps & wrist rotation."
        },
        {
            Image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_1232,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1717399955166-c47eff.jpeg",
            title: "Top to toe stress relief massage", rating: "4.85(32.6 reviews)", price: "₹ 1,899", desc1: "Kneading of thighs & calves. Palm circles & thumb sliding over knees & gentle toe pulling", desc2: "Palm sliding & kneading of full arms & shoulders. Massage of biceps, triceps & wrist rotation."
        },
    ]


const womensData=(value)=>{
    return <View>
                    <Image style={{ width: windowWidth / 1.1, height: windowWidth / 2, alignSelf: "center", resizeMode: "contain", borderRadius: 20 }} source={{uri:value.item.Image}} />
                    <View style={{ margin: 25 }}>
                        {/* <Text style={{ color: "green" }}>FREE INSTALLATION</Text> */}
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 20, fontWeight: "600" }}>{value.item.title}</Text>
                            <View style={{ borderWidth: 1.5, height: 35, width: 90, borderRadius: 10, justifyContent: "center", alignItems: "center", borderColor: "#f5f5f5" }}>
                                <Text style={{ color: "blue" }}>Add</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                            <SearchIcon color={"grey"} name="star" size={15} />
                            <Text style={{ marginLeft: 5, fontSize: 15, textDecorationLine: "underline" }}>4.83 (2k bookings)</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                            <Text>{value?.item.price}</Text>
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


}

    return (
        <View style={{flex:1,backgroundColor:"white"}}>
            <Text style={{fontSize:25,fontWeight:"600",margin:20}}>Spa for Women</Text>

            <View style={{width:windowWidth/1.1,height:windowHeight/17,backgroundColor:"#f5f5f5",alignSelf:"center",borderRadius:10,marginVertical:20,padding:20,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
<View style={{flexDirection:"row",alignItems:"center"}}> 

<HeartIcon name="heart" color={"blue"}/>
                <Text style={{marginStart:10}}>Massage Guide</Text>
</View>

                <Greater name="greater-than"/>
            </View>
            <FlatList data={data} renderItem={womensData}/>
        </View>
    )
}

const styles = StyleSheet.create({

})