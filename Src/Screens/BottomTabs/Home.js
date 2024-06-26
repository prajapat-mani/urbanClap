import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, ImageBackground, TouchableOpacity, Modal, Pressable, TouchableWithoutFeedback } from 'react-native';
import { TypeAnimation } from 'react-native-type-animation';

import SearchIcon from "react-native-vector-icons/Ionicons"
import { Dimensions } from 'react-native';
import womensImage from "../../../Assets/women.webp"
import MensImage from "../../../Assets/men.webp"
import AcImage from "../../../Assets/AC.webp"
import cleaningImage from "../../../Assets/cleaning.webp"
import electricImage from "../../../Assets/electric.webp"
import waterImage from "../../../Assets/water.webp"
import smartLockImage from "../../../Assets/smartLock.webp"
import paintImage from "../../../Assets/paint.webp"
import firstImage from "../../../Assets/first.jpeg"
import secondImage from "../../../Assets/second.jpeg"
import thirdImage from "../../../Assets/third.jpeg"
import fourthImage from "../../../Assets/fourth.jpeg"
import fiveImage from "../../../Assets/five.jpeg"
import sixImage from "../../../Assets/six.jpeg"
import smartlock from "../../../Assets/smartlock.jpeg"
import nativePurifier from "../../../Assets/nativePurifier.jpeg"
import bathroom from "../../../Assets/bathroom.jpeg"
import painting from "../../../Assets/painting.jpeg"
import hairStudio from "../../../Assets/hairStudio.jpeg"
import AcService from "../../../Assets/AcService.png"
import PowersaverAC from "../../../Assets/1682671878656-d02ec7.jpeg"
import AcRepair from "../../../Assets/AcService.png"
import ClassicBathroom from "../../../Assets/1656047929083-beff0d.jpeg"
import InstanceBathroom from "../../../Assets/1659102409372-8ca38a.png"
import HairCut from "../../../Assets/1677519626723-82ff21.jpeg"
import SofaClean from "../../../Assets/1659096798036-9b40ee.webp"
import Stress from "../../../Assets/1652164246962-f39965.webp"
import ElysianBritish from "../../../Assets/1658419126640-e79fa1.webp"
import Video, { VideoRef } from 'react-native-video';
import video1 from '../../../Assets/Videos/14907580-uhd_2160_3840_60fps.mp4'
import video2 from '../../../Assets/Videos/15465878-hd_1080_1920_30fps.mp4'
import video3 from '../../../Assets/Videos/17687288-uhd_2160_3840_30fps.mp4'
import video4 from '../../../Assets/Videos/17169505-hd_1080_1920_30fps.mp4'
import video5 from '../../../Assets/Videos/14907580-uhd_2160_3840_60fps.mp4'
import saloonImage1 from "../../../Assets/1717397984511-247afe.jpeg"
import saloonImage2 from "../../../Assets/1717398014369-209a76.webp"
import saloonImage3 from "../../../Assets/1717397992635-09b511.jpeg"
import saloonImage4 from "../../../Assets/1717398005609-e19abc.jpeg"
import saloonImage5 from "../../../Assets/1717398009148-4b7a11.jpeg"
import saloonImage6 from "../../../Assets/1717398018197-c68fcc.jpeg"
import stressRelief from "../../../Assets/1700143543316-c5eb5c.webp"
import painRelief from "../../../Assets/1700143539186-26f4e5.webp"
import NaturalSkin from "../../../Assets/1700143553928-f5f936.webp"
import masssageformen from "../../../Assets/1655116252308-ac6dfd.webp"
import cleaning_control1 from "../../../Assets/1700129474836-c5b146.webp"
import cleaning_control2 from "../../../Assets/1700141161917-028287.webp"
import cleaning_control3 from "../../../Assets/1700204929955-75dd47.webp"
import repair1 from "../../../Assets/1700141800784-5ca077.webp"
import repair2 from "../../../Assets/1700141956384-2e00b1.webp"
import repair3 from "../../../Assets/1700137604899-896004.webp"
import repair4 from "../../../Assets/1715151214463-bd0865.webp"
import repair5 from "../../../Assets/1700142017541-7905b3.webp"
import repair6 from "../../../Assets/1700137613735-a7d95a.webp"
import repair7 from "../../../Assets/1700142193374-61370a.webp"
import repair8 from "../../../Assets/1700198936506-15c0e3.webp"
import quickrepair1 from "../../../Assets/1652172643970-9ad67b.webp"
import quickrepair2 from "../../../Assets/1653632250914-ca15c6.webp"
import quickrepair3 from "../../../Assets/1653643393656-013703.webp"
import quickrepair4 from "../../../Assets/1653645917034-f5ecc5.webp"
import quickrepair5 from "../../../Assets/1653646139213-3c072a.webp"
import quickrepair6 from "../../../Assets/1653648546142-327cb9.webp"
import quickrepair7 from "../../../Assets/1653890923765-57dea3.webp"
import quickrepair8 from "../../../Assets/1653892249137-8848bb.webp"
import quickrepair9 from "../../../Assets/1653983252697-ae30db.webp"
import quickrepair10 from "../../../Assets/1701149688871-2980d1.webp"
import CartIcon from "react-native-vector-icons/Feather"
import stressReliefforman from "../../../Assets/1700135826199-2ae5f2.webp"
import painReliefforman from "../../../Assets/1700135813754-417df5.webp"
import postworkout from "../../../Assets/1700135829701-85b36c.webp"
import NativeSmartLock from "../../../Assets/smart-locks.png"
import womensaloonimg1 from "../../../Assets/1672324465583-2688a9.webp"
import womensaloonimg2 from "../../../Assets/1669023257508-ffd582.webp"
import womensaloonimg3 from "../../../Assets/1673936988512-276a19.webp"
// import womensaloonimg from "../../../Assets/1672324465583-2688a9.webp"
import GetLocation from 'react-native-get-location'
import { useNavigation } from '@react-navigation/native';












const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Home = () => {



    const [modalVisible, setModalVisible] = useState(false);


const navigation=useNavigation()



    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView stickyHeaderIndices={[1]}>
                <View style={{justifyContent:"space-between", flexDirection:"row",marginLeft:20,marginVertical:10}}>
                    <View>

                    <Text style={{fontSize:20,fontWeight:"500",}}>Gutam Marg</Text>
                    <Text style={{color:"grey",marginTop:10}}>near Kukri House-Rani sati Nagar-nirman...</Text>
                    </View>
                    <View>
                        <View style={{height:45,width:45,borderRadius:30,borderWidth:2,borderColor:"#f5f5f5",justifyContent:"center",alignItems:"center",marginRight:20}}>
                        <CartIcon name="shopping-cart" size={25}/>

                        </View>
                    </View>
                </View>
<TouchableOpacity >
                <View style={styles.searchview}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <SearchIcon style={styles.searchIcon} name="search" size={25} color={"grey"} />
                        <TypeAnimation
                            sequence={[
                                { text: 'AC Cleaning' },
                                { text: 'Kitchen Cleaning' },
                                { text: 'Facial' },



                            ]}
                            loop
                            style={{
                                color: 'grey',
                                fontSize: 20,
                                padding: 10
                            }}
                        />
                    </View>
                    <View>


                    </View>


                </View>
                </TouchableOpacity>


                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(false);

                            // this.closeButtonFunction()
                        }}>
                        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                        <View style={styles.modalContainer}>

                            <View
                                style={{
                                    height: '40%',
                                    marginTop: 'auto',
                                    backgroundColor: 'white'
                                }}>

                                <TouchableOpacity
                                    onPress={() => {
                                        setModalVisible(false);
                                    }}>
                                        <View style={{justifyContent:"flex-end", alignSelf:"flex-end"}}>
                                    <View style={styles.closeButtonText}>
                                        <Text style={{fontSize:20}}>x</Text>

                                    </View>
                                    </View>
                                </TouchableOpacity>


                                <View style={styles.footer}>
                                    <Text style={{ fontSize: 20 }}>Women's Salon & Spa</Text>
                                    <View style={{ marginTop: 30, flexDirection: "row" }}>

                                        <View style={{ alignItems: "start", }}>
                                            <View style={styles.Catagory}>
                                                <Image style={styles.CatagoryImage} source={womensaloonimg1} />
                                            </View>
                                            <View>
                                                <Text style={styles.CatagoryText}>Cleaning</Text>
                                            </View>
                                        </View>

                                        <View style={{ alignItems: "start", }}>
                                            <View style={styles.Catagory}>
                                                <Image style={styles.CatagoryImage} source={womensaloonimg2} />
                                            </View>
                                            <View>
                                                <Text style={styles.CatagoryText}>Electrician{"\n"} Plumber & {"\n"} Carpenter</Text>
                                            </View>
                                        </View>

                                        <View style={{ alignItems: "start", }}>
                                            <View style={styles.Catagory}>
                                                <Image style={styles.CatagoryImage} source={womensaloonimg3} />
                                            </View>
                                            <View>
                                                <Text style={styles.CatagoryText}>Native Water {"\n"} Purifier</Text>
                                            </View>
                                        </View>
                                    </View>

                                </View>

                            </View>
                </View>

                        </TouchableWithoutFeedback>
                    </Modal>
               
                <View
                    style={styles.container}>

                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => setModalVisible(true)} >
                            <View style={{ alignItems: "start", }}>
                                <View style={styles.Catagory}>
                                    <Image style={styles.CatagoryImage} source={womensImage} />
                                </View>
                                <View>
                                    <Text style={styles.CatagoryText}>Women's Salon {"\n"} & Spa</Text>
                                </View>
                            </View>
                        </TouchableOpacity>


                        <View style={{ alignItems: "center", }}>
                            <View style={styles.Catagory}>
                                <Image style={styles.CatagoryImage} source={MensImage} />
                            </View>
                            <View>
                                <Text style={styles.CatagoryText}>Men's Salon {"\n"} & massage</Text>
                            </View>
                        </View>

                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <View style={styles.Catagory}>
                                <Image style={styles.CatagoryImage} source={AcImage} />
                            </View>
                            <View>
                                <Text style={styles.CatagoryText}>AC & {"\n"} Appliance {"\n"} Repair</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: 30, flexDirection: "row" }}>

                        <View style={{ alignItems: "start", }}>
                            <View style={styles.Catagory}>
                                <Image style={styles.CatagoryImage} source={cleaningImage} />
                            </View>
                            <View>
                                <Text style={styles.CatagoryText}>Cleaning</Text>
                            </View>
                        </View>

                        <View style={{ alignItems: "start", }}>
                            <View style={styles.Catagory}>
                                <Image style={styles.CatagoryImage} source={electricImage} />
                            </View>
                            <View>
                                <Text style={styles.CatagoryText}>Electrician{"\n"} Plumber & {"\n"} Carpenter</Text>
                            </View>
                        </View>

                        <View style={{ alignItems: "start", }}>
                            <View style={styles.Catagory}>
                                <Image style={styles.CatagoryImage} source={waterImage} />
                            </View>
                            <View>
                                <Text style={styles.CatagoryText}>Native Water {"\n"} Purifier</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: 30, flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={styles.Catagory2}>
                            <Text>Smart Locks</Text>
                            <Image style={styles.CatagoryImage} source={smartLockImage} />
                        </View>
                        <View style={styles.Catagory2}>
                            <Text>Painting &{"\n"}WaterProofing</Text>
                            <Image style={styles.CatagoryImage} source={paintImage} />
                        </View>

                    </View>
                </View>





                <View style={styles.seperator}></View>

                <View style={styles.container}>

                    <Text style={styles.VideoTitle}>Thoughtful Curations</Text>
                    <Text style={{ fontSize: 20 }}>Of Our Finest Experiences</Text>
                    <ScrollView horizontal={true} style={{ flexDirection: "row", }}>
                        <View style={styles.VideoView}>
                            <Video
                                source={video2}
                                paused={false}
                                style={styles.backgroundVideo}
                                repeat={true}
                            />
                        </View>
                        <View style={styles.VideoView}>
                            <Video
                                source={video3}
                                paused={false}
                                style={styles.backgroundVideo}
                                repeat={true}
                            />
                        </View>
                        <View style={styles.VideoView}>
                            <Video
                                source={video1}
                                paused={false}
                                style={styles.backgroundVideo}
                                repeat={true}
                            />
                        </View>

                        <View style={styles.VideoView}>
                            <Video
                                source={video4}
                                paused={false}
                                style={styles.backgroundVideo}
                                repeat={true}
                            />
                        </View>
                        <View style={styles.VideoView}>
                            <Video
                                source={video5}
                                paused={false}
                                style={styles.backgroundVideo}
                                repeat={true}
                            />
                        </View>


                    </ScrollView>


                </View>





                <View style={styles.seperator}></View>
                <View style={{ marginTop: 15 }}>
                    <ScrollView horizontal={true}>
                        <Image style={styles.scrolledImages} source={firstImage} />
                        <Image style={styles.scrolledImages} source={secondImage} />
                        <Image style={styles.scrolledImages} source={thirdImage} />
                        <Image style={styles.scrolledImages} source={fourthImage} />
                        <Image style={styles.scrolledImages} source={fiveImage} />
                        <Image style={styles.scrolledImages} source={sixImage} />


                    </ScrollView>
                </View>
                <View style={styles.seperator}></View>
                <View style={styles.container}>
                    <Text style={{ fontSize: 22, fontWeight: "bold" }}>New and noteworthy</Text>
                    <View style={{ marginTop: 15 }}>
                        <ScrollView horizontal={true}>
                            <TouchableOpacity 
                           onPress={() => navigation.navigate('SmartLock')}
                            
                            >
                            <View style={{ alignItems: "center" }} 
                            >
                                <Image style={styles.scrolledImages2} source={smartlock} />
                                <Text>Smart Locks</Text>
                            </View>
                            </TouchableOpacity>
                            <View style={{ alignItems: "center" }}>
                                <Image style={styles.scrolledImages2} source={nativePurifier} />
                                <Text>Native Water{"\n"}Purifier</Text>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <Image style={styles.scrolledImages2} source={bathroom} />
                                <Text>Bathroom & {"\n"}Kitchen {"\n"}Cleaning</Text>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <Image style={styles.scrolledImages2} source={painting} />
                                <Text>Painting &{"\n"}WaterProofing</Text>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <Image style={styles.scrolledImages2} source={hairStudio} />
                                <Text>Hair Studio{"\n"}For Women</Text>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <Image style={styles.scrolledImages2} source={AcService} />
                                <Text>AC Service{"\n"}and Repair</Text>
                            </View>



                        </ScrollView>
                    </View>
                </View>

                <View style={styles.seperator}></View>


                <View style={styles.container}>
                    <Text style={{ fontSize: 22, fontWeight: "bold" }}>Most Booked Service</Text>
                    <View style={{ marginTop: 15 }}>
                        <ScrollView horizontal={true}>
                            <View style={{ alignItems: "flex-start" }}>
                                <Image style={styles.scrolledImages3} source={PowersaverAC} />
                                <Text>Power Saver AC{"\n"}Service</Text>
                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                    <SearchIcon color={"grey"} name="star" />
                                    <Text style={{ color: "grey", marginLeft: 5, }}>4.83 (429.9k)</Text>
                                </View>
                                <Text>₹ 619</Text>
                            </View>
                            <View style={{ alignItems: "flex-start" }}>
                                <Image style={styles.scrolledImages3} source={AcRepair} />
                                <Text>AC Repair(Split/{"\n"}Window</Text>
                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                    <SearchIcon color={"grey"} name="star" />
                                    <Text style={{ color: "grey", marginLeft: 5, }}>4.83 (429.9k)</Text>
                                </View>
                                <Text>₹ 619</Text>
                            </View>
                            <View style={{ alignItems: "flex-start" }}>
                                <Image style={styles.scrolledImages3} source={ClassicBathroom} />
                                <Text>Classic Bathroom{"\n"}Cleaning </Text>
                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                    <SearchIcon color={"grey"} name="star" />
                                    <Text style={{ color: "grey", marginLeft: 5, }}>4.83 (429.9k)</Text>
                                </View>
                                <Text>₹ 619</Text>
                            </View>
                            <View style={{ alignItems: "flex-start" }}>
                                <Image style={styles.scrolledImages3} source={InstanceBathroom} />
                                <Text>Instance Bathroom{"\n"}Cleaning</Text>
                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                    <SearchIcon color={"grey"} name="star" />
                                    <Text style={{ color: "grey", marginLeft: 5, }}>4.83 (429.9k)</Text>
                                </View>
                                <Text>₹ 619</Text>
                            </View>
                            <View style={{ alignItems: "flex-start" }}>
                                <Image style={styles.scrolledImages3} source={HairCut} />
                                <Text>HairCut For Men</Text>
                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                    <SearchIcon color={"grey"} name="star" />
                                    <Text style={{ color: "grey", marginLeft: 5, }}>4.83 (429.9k)</Text>
                                </View>
                                <Text>₹ 619</Text>
                            </View>
                            <View style={{ alignItems: "flex-start" }}>
                                <Image style={styles.scrolledImages3} source={SofaClean} />
                                <Text>Sofa Cleaning</Text>
                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                    <SearchIcon color={"grey"} name="star" />
                                    <Text style={{ color: "grey", marginLeft: 5, }}>4.83 (429.9k)</Text>
                                </View>
                                <Text>₹ 619</Text>
                            </View>
                            <View style={{ alignItems: "flex-start" }}>
                                <Image style={styles.scrolledImages3} source={Stress} />
                                <Text>Stress relief{"\n"}Swedish Massage</Text>
                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                    <SearchIcon color={"grey"} name="star" />
                                    <Text style={{ color: "grey", marginLeft: 5, }}>4.83 (429.9k)</Text>
                                </View>
                                <Text>₹ 619</Text>
                            </View>
                            <View style={{ alignItems: "flex-start" }}>
                                <Image style={styles.scrolledImages3} source={ElysianBritish} />
                                <Text>Elysian British{"\n"}Rose Production</Text>
                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                    <SearchIcon color={"grey"} name="star" />
                                    <Text style={{ color: "grey", marginLeft: 5, }}>4.83 (429.9k)</Text>
                                </View>
                                <Text>₹ 619</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>


                <View style={styles.seperator}></View>

                <View style={styles.container}>

                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Celeberating Professional</Text>
                    <Text style={{ fontSize: 15 }}>Real Lives,real impact</Text>
                    <ScrollView horizontal={true} style={{ flexDirection: "row", }}>
                        <View style={styles.VideoView}>
                            <Video
                                source={video2}
                                paused={false}
                                style={styles.backgroundVideo}
                                repeat={true}
                            />
                        </View>
                        <View style={styles.VideoView}>
                            <Video
                                source={video3}
                                paused={false}
                                style={styles.backgroundVideo}
                                repeat={true}
                            />
                        </View>
                        <View style={styles.VideoView}>
                            <Video
                                source={video1}
                                paused={false}
                                style={styles.backgroundVideo}
                                repeat={true}
                            />
                        </View>

                        <View style={styles.VideoView}>
                            <Video
                                source={video4}
                                paused={false}
                                style={styles.backgroundVideo}
                                repeat={true}
                            />
                        </View>
                        <View style={styles.VideoView}>
                            <Video
                                source={video5}
                                paused={false}
                                style={styles.backgroundVideo}
                                repeat={true}
                            />
                        </View>


                    </ScrollView>


                </View>

                <View style={styles.seperator}></View>

                <View style={styles.container}>
                    <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Salon For Women</Text>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "blue" }}>See all</Text>

                    </View>
                    <ScrollView horizontal={true}>

                        <View>
                            <View style={styles.salonView}>
                                <Text style={styles.salontext}>Manicure</Text>
                                <Image style={styles.salonImage} source={saloonImage4} />

                            </View>
                            <View style={styles.salonView}>
                                <Text style={styles.salontext}>Pedicure</Text>
                                <Image style={styles.salonImage} source={saloonImage5} />

                            </View>
                        </View>

                        <View>
                            <View style={styles.salonView}>
                                <Text style={styles.salontext}>Facial& Cleanup</Text>
                                <Image style={styles.salonImage} source={saloonImage1} />

                            </View>
                            <View style={styles.salonView}>
                                <Text style={styles.salontext}>Hair Care</Text>
                                <Image style={styles.salonImage} source={saloonImage6} />

                            </View>
                        </View>

                        <View>
                            <View style={styles.salonView}>
                                <Text style={styles.salontext}>Waxing</Text>
                                <Image style={styles.salonImage} source={saloonImage3} />

                            </View>
                            <View style={styles.salonView}>
                                <Text style={styles.salontext}>Bleach & Detan</Text>
                                <Image style={styles.salonImage} source={saloonImage2} />

                            </View>
                        </View>
                    </ScrollView>

                </View>
                <View style={styles.seperator}></View>
                <View style={styles.container}>
                    <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Spa For Women</Text>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "blue" }}>See all</Text>

                    </View>
                    <ScrollView horizontal={true}>
                       <TouchableOpacity onPress={()=>navigation.navigate("SpaForWomen")}>
                       <View style={styles.salonView}>
                            <Text style={styles.salontext}>Stress Relief</Text>
                            <Image style={styles.salonImage} source={stressRelief} />

                        </View>
                       </TouchableOpacity>
                       

                        <View style={styles.salonView}>
                            <Text style={styles.salontext}>Pain Relief</Text>
                            <Image style={styles.salonImage} source={painRelief} />

                        </View>

                        <View style={styles.salonView}>
                            <Text style={styles.salontext}>Natural Skin</Text>
                            <Image style={styles.salonImage} source={NaturalSkin} />

                        </View>
                    </ScrollView>



                </View>
                {/* <View style={styles.seperator}></View> */}

                <View style={styles.container}>
                    <View style={styles.massageImageView}>
                        <ImageBackground style={styles.masssageformen} source={masssageformen}>
                            <Text style={styles.textOnImage}>MASSAGE {"\n"}FOR MEN</Text>
                            <Text style={styles.textOnImage2}>Indulge With {"\n"}Ayurvedic Massage {"\n"}at Home</Text>
                            <View style={styles.explore}>
                                <Text>Explore</Text>
                            </View>

                        </ImageBackground>
                    </View>
                    <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginTop: 40 }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Cleaning & pest control</Text>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "blue" }}>See all</Text>

                    </View>

                    <ScrollView horizontal={true}>

                        <View>
                            <View style={styles.salonView}>
                                <Text style={styles.salontext}>Full Home {"\n"}Cleaning</Text>
                                <Image style={styles.salonImage} source={cleaning_control1} />

                            </View>

                        </View>

                        <View>
                            <View style={styles.salonView}>
                                <Text style={styles.salontext}>Bathroom &{"\n"}Kitchen Cleaning</Text>
                                <Image style={styles.salonImage} source={cleaning_control2} />

                            </View>

                        </View>

                        <View>
                            <View style={styles.salonView}>
                                <Text style={styles.salontext}>Sofa & Carpet{"\n"}Cleaning</Text>
                                <Image style={styles.salonImage} source={cleaning_control3} />

                            </View>

                        </View>
                    </ScrollView>

                </View>

                <View style={styles.seperator}></View>

                <View style={styles.container}>


                    <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>AC & applience repair</Text>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "blue" }}>See all</Text>

                    </View>

                    <ScrollView horizontal={true}>

                        <View style={styles.salonView}>
                            <Text style={styles.salontext}>AC Service and {"\n"}repair</Text>
                            <Image style={styles.salonImage} source={repair1} />

                        </View>


                        <View style={styles.salonView}>
                            <Text style={styles.salontext}>Water Purifier{"\n"}repair</Text>
                            <Image style={styles.salonImage} source={repair2} />

                        </View>



                        <View style={styles.salonView}>
                            <Text style={styles.salontext}>Chimney repair</Text>
                            <Image style={styles.salonImage} source={repair3} />

                        </View>


                        <View style={styles.salonView}>
                            <Text style={styles.salontext}>Native Water{"\n"}repair</Text>
                            <Image style={styles.salonImage} source={repair4} />

                        </View>

                        <View style={styles.salonView}>
                            <Text style={styles.salontext}>Washing{"\n"}Machine repair</Text>
                            <Image style={styles.salonImage} source={repair5} />

                        </View>

                        <View style={styles.salonView}>
                            <Text style={styles.salontext}>Refrigeter{"\n"}repair</Text>
                            <Image style={styles.salonImage} source={repair6} />

                        </View>

                        <View style={styles.salonView}>
                            <Text style={styles.salontext}>Microwave{"\n"}repair</Text>
                            <Image style={styles.salonImage} source={repair7} />

                        </View>

                        <View style={styles.salonView}>
                            <Text style={styles.salontext}>Geyser repair</Text>
                            <Image style={styles.salonImage} source={repair8} />

                        </View>




                    </ScrollView>

                </View>
                <View style={styles.seperator}></View>

                <View style={styles.container}>


                    <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Quick Home repairs</Text>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "blue" }}>See all</Text>

                    </View>


                    <ScrollView style={{ marginTop: 15 }} horizontal={true}>
                        <View style={{ alignItems: "flex-start" }}>
                            <Image style={styles.scrolledImages3} source={quickrepair1} />
                            <Text>Tap Repair</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                <SearchIcon color={"grey"} name="star" />
                                <Text style={{ color: "grey", marginLeft: 5, }}>4.83 (429.9k)</Text>
                            </View>
                            <Text>₹ 619</Text>
                        </View>
                        <View style={{ alignItems: "flex-start" }}>
                            <Image style={styles.scrolledImages3} source={quickrepair2} />
                            <Text>Switch/Socket{"\n"}Replacement</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                <SearchIcon color={"grey"} name="star" />
                                <Text style={{ color: "grey", marginLeft: 5, }}>4.83 (429.9k)</Text>
                            </View>
                            <Text>₹ 619</Text>
                        </View>
                        <View style={{ alignItems: "flex-start" }}>
                            <Image style={styles.scrolledImages3} source={quickrepair3} />
                            <Text>Fan Repair</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                <SearchIcon color={"grey"} name="star" />
                                <Text style={{ color: "grey", marginLeft: 5, }}>4.83 (429.9k)</Text>
                            </View>
                            <Text>₹ 619</Text>
                        </View>
                        <View style={{ alignItems: "flex-start" }}>
                            <Image style={styles.scrolledImages3} source={quickrepair4} />
                            <Text>Jet Spray{"\n"}Installation</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                <SearchIcon color={"grey"} name="star" />
                                <Text style={{ color: "grey", marginLeft: 5, }}>4.83 (429.9k)</Text>
                            </View>
                            <Text>₹ 619</Text>
                        </View>
                        <View style={{ alignItems: "flex-start" }}>
                            <Image style={styles.scrolledImages3} source={quickrepair5} />
                            <Text>Drill & Hang(Wall{"\n"}Decor)</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                <SearchIcon color={"grey"} name="star" />
                                <Text style={{ color: "grey", marginLeft: 5, }}>4.83 (429.9k)</Text>
                            </View>
                            <Text>₹ 619</Text>
                        </View>
                        <View style={{ alignItems: "flex-start" }}>
                            <Image style={styles.scrolledImages3} source={quickrepair6} />
                            <Text>Sofa Cleaning</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                <SearchIcon color={"grey"} name="star" />
                                <Text style={{ color: "grey", marginLeft: 5, }}>4.83 (429.9k)</Text>
                            </View>
                            <Text>₹ 619</Text>
                        </View>
                        <View style={{ alignItems: "flex-start" }}>
                            <Image style={styles.scrolledImages3} source={quickrepair7} />
                            <Text>Stress relief{"\n"}Swedish Massage</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                <SearchIcon color={"grey"} name="star" />
                                <Text style={{ color: "grey", marginLeft: 5, }}>4.83 (429.9k)</Text>
                            </View>
                            <Text>₹ 619</Text>
                        </View>
                        <View style={{ alignItems: "flex-start" }}>
                            <Image style={styles.scrolledImages3} source={quickrepair8} />
                            <Text>Elysian British{"\n"}Rose Production</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                <SearchIcon color={"grey"} name="star" />
                                <Text style={{ color: "grey", marginLeft: 5, }}>4.83 (429.9k)</Text>
                            </View>
                            <Text>₹ 619</Text>
                        </View>
                        <View style={{ alignItems: "flex-start" }}>
                            <Image style={styles.scrolledImages3} source={quickrepair9} />
                            <Text>Elysian British{"\n"}Rose Production</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                <SearchIcon color={"grey"} name="star" />
                                <Text style={{ color: "grey", marginLeft: 5, }}>4.83 (429.9k)</Text>
                            </View>
                            <Text>₹ 619</Text>
                        </View>
                        <View style={{ alignItems: "flex-start" }}>
                            <Image style={styles.scrolledImages3} source={quickrepair10} />
                            <Text>Elysian British{"\n"}Rose Production</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                                <SearchIcon color={"grey"} name="star" />
                                <Text style={{ color: "grey", marginLeft: 5, }}>4.83 (429.9k)</Text>
                            </View>
                            <Text>₹ 619</Text>
                        </View>
                    </ScrollView>

                </View>

                <View style={styles.seperator}></View>
                <View style={styles.container}>
                    <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Massage For Men</Text>
                        <Text style={{ fontSize: 15, fontWeight: "bold", color: "blue" }}>See all</Text>

                    </View>
                    <ScrollView horizontal={true}>
                        <View style={styles.salonView}>
                            <Text style={styles.salontext}>Stress Relief</Text>
                            <Image style={styles.salonImage} source={stressReliefforman} />

                        </View>

                        <View style={styles.salonView}>
                            <Text style={styles.salontext}>Pain Relief</Text>
                            <Image style={styles.salonImage} source={painReliefforman} />

                        </View>

                        <View style={styles.salonView}>
                            <Text style={styles.salontext}>Natural Skin</Text>
                            <Image style={styles.salonImage} source={postworkout} />

                        </View>
                    </ScrollView>


                    <View style={styles.NativeSmartLockView}>
                        <Image style={styles.NativeSmartLock} source={NativeSmartLock} />

                    </View>


                </View>

            </ScrollView >
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: 16,
        backgroundColor: "white"
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
    },
    searchview: {
        flexDirection: "row",
        // height: windowHeight * .05,
        width: windowWidth * .9,
        borderWidth: 2,
        borderColor: "#f5f5f5",
        borderRadius: 10,
        justifyContent:"flex-start",
        // padding:16,                                          
        backgroundColor: "white",
        margin: 16,
    },
    searchIcon: {

        paddingTop: 5,
        paddingLeft: 15,
        // borderWidth:5
        // justifyContent:"center"
    },
    Catagory: {
        backgroundColor: "#f5f5f5",
        height: windowHeight * .08,
        width: windowWidth * 0.28,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12
    },
    CatagoryImage: {
        height: windowHeight * .08,
        
        width: 50
    },
    FirstCatagoryView: {
        marginTop: 20,
        flexDirection: "row",
        height: windowHeight * 0.3

    },
    CatagoryText: {
        textAlign: "center",
        marginTop: 15
    },
    Catagory2: {
        backgroundColor: "#f5f5f5",
        height: windowHeight * .09,
        width: windowWidth * 0.44,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
        flexDirection: "row"
    },
    scrolledImages: {
        height: windowHeight * 0.2,
        width: windowWidth * 0.7,
        marginRight:"1%",
        resizeMode: "contain"

    },
    scrolledImages2: {
        height: windowHeight * 0.1,
        width: windowWidth * 0.25,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 5
        // resizeMode:"contain"

    },
    scrolledImages3: {
        height: windowHeight * 0.15,
        width: windowWidth * 0.4,
        marginRight: 15,
        marginBottom: 10,
        borderRadius: 5
        // resizeMode:"contain"

    },
    seperator: {
        backgroundColor: "#f5f5f5",
        marginVertical: 20,
        height: windowHeight * 0.009,
        width: windowWidth * 1
    },
    backgroundVideo: {
        height: windowWidth * 0.7,
        width: windowWidth * 0.4,
    },
    VideoTitle: {
        color: "purple",
        fontSize: 20
    },
    VideoView: {
        height: windowWidth * 0.7,
        width: windowWidth * 0.4,
        marginTop: 20,
        borderRadius: 20,
        overflow: 'hidden',
        marginRight: 15

        // flexDirection:"row",
        // borderRadius:15,


    },
    salonImage: {
        height: windowHeight / 6,
        width: windowWidth / 2.3,
        // borderRadius:10,
        // borderColor:"#f5f5f5",
        // borderWidth:1,
        resizeMode: "contain",
    },
    salonView: {
        height: windowHeight / 4.9,
        width: windowWidth / 2.3,
        borderRadius: 10,
        borderColor: "#f5f5f5",
        borderWidth: 1,
        overflow: "hidden",
        marginVertical: 15,
        marginRight: 20,
        resizeMode: "cover"

    },
    salontext: {
        fontWeight: "400",
        margin: 10,
        fontSize: 17
    },
    masssageformen: {
        height: windowHeight / 3,
        width: windowWidth / 1.1,
        resizeMode: "cover",
        alignSelf: "center",
        // position:"absolute"

    },
    massageImageView: {
        borderRadius: 10,
        overflow: "hidden"


    },
    textOnImage: {
        color: "white",
        fontWeight: "600",
        margin: 15,
        fontSize: 20
    },
    textOnImage2: {
        color: "white",
        fontWeight: "700",
        margin: 15,
        top: 40,
        fontSize: 25,
    },
    explore: {
        backgroundColor: "white",
        height: 35,
        width: 80,
        margin: 15,
        top: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    NativeSmartLock: {
        height: windowHeight / 3,
        width: windowWidth / 1.1,
        resizeMode: "stretch",
        alignSelf: "center",
        // borderRadius:20
        borderWidth: 1,

    },
    NativeSmartLockView: {
        height: windowHeight / 3,
        width: windowWidth / 1.1,
        borderRadius: 10,
        borderWidth: 1,
        overflow: "hidden",
        marginTop: 30


    },
    footer: {
        margin: 20,
        flex: 1
    },
    closeButtonText: {
        // justifyContent: "flex-end",
        marginTop: -30,
        height: 30,
         width: 30,
          borderRadius: 20,
           backgroundColor: "white", 
           justifyContent: "center", 
           alignItems: "center"
    },
    modalContainer: {
        flex: 1,
        // backgroundColor: "grey"
    }






});

export default Home;
