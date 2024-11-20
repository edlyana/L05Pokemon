import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity, ScrollView, StyleSheet, SectionList, StatusBar, Button, TextInput} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
    opacityStyle: {
        alignItems: 'center',
        borderWidth: 1,
        padding: 20,
        marginLeft: 15,
        marginRight: 15,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#EAE1DF',
    },
    textStyle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    headerText:{
        textAlign: 'center',
        fontSize: 22,
        marginLeft: 15,
        marginRight: 15,
        // margin: 5,
        fontWeight: 'bold',
        borderWidth: 1,
    },
    imgCard:{
        width: 179,
        height: 250,
    },
    buttonContainer:{
        borderWidth: 1,
        margin: 10,
    },
})

const dataSource = [
  {data:[
      {key:"Farfetch'd", uriLink:"https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_83-2x.png"},
      {key:"Raticate", uriLink:"https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_20-2x.png"}
    ],
      // title:"NORMAL", bkColor:"grey", icon_name:"dog"},
  title:"NORMAL", bkColor:"#CAC2B5", nameIcon:"sun", txColor:"black"},
  {data:[
      {key:"Metapod", uriLink:"https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_11-2x.png"},
      {key:"Exeggutor", uriLink:"https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_103-2x.png"},
    ],
  title:"GRASS", bkColor:"#8EA604", nameIcon:"leaf"},
  {data:[
      {key:"Mr. Mime", uriLink:"https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_122-2x.png"},
      {key:"Mew", uriLink:"https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_151-2x.png"},
    ],
  title:"PSYCHIC", bkColor:"#7E78D2", nameIcon:"eye"},
];

const renderItem = ({item}) => {
    return(
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style={styles.textStyle}>{item.key}</Text>
            <Image style={styles.imgCard} source={{uri: item.uriLink}} />
        </TouchableOpacity>
    );
};

const App = () => {
    return (
        <View style={[styles.container, { marginBottom: 150}]}>
            <StatusBar hidden={true}/>
            <View style={styles.buttonContainer}>
                <Button title="Add New Pokemon" />
            </View>
            <View>
                <SectionList sections={dataSource} renderItem={renderItem}
                             renderSectionHeader={({section:{title, bkColor, nameIcon}})=>(
                                 <Text style={[styles.headerText, {backgroundColor:bkColor}]}><Icon name={nameIcon} size={25} color={"black"}/>  {title}</Text>
                             )}
                />
            </View>
        </View>
    );
};

export default App;
