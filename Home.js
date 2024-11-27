import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, SectionList, StatusBar, Button, TextInput} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import {dataSource} from './Data';

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

const Home = ({navigation}) => {

    const renderItem = ({item, index, section}) => {
        let imageLink = "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_" + item.num + "-2x.png"
        return(
            <TouchableOpacity style={styles.opacityStyle} onPress={() => {
                navigation.navigate("Edit", {index:index, type:section.title, key:item.key, num:item.num});
            }}>
                <Text style={styles.textStyle}>{item.key}</Text>
                <Image style={styles.imgCard} source={{uri: imageLink}} />
            </TouchableOpacity>
        );
    };

    return (
        <View style={[styles.container, { marginBottom: 150}]}>
            <StatusBar hidden={true}/>
            <View style={styles.buttonContainer}>
                <Button title="Add New Pokemon" onPress={()=> {navigation.navigate('Add')}}/>
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

export default Home;
