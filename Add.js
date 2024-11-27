import React, {useState} from 'react';
import {dataSource} from './Data';
import {TextInput, View, Text, Button} from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const Add = ({navigation}) => {
    const [name, setName] = useState('');  // letter == name
    const [pokeNum, setPokeNum] = useState();   // pokemon number
    const [type, setType] = useState('');   // pokemon type
    return (
        <View style={{padding: 10}}>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Pokemon Name:</Text>
                <TextInput style={{borderWidth: 1}} onChangeText={(text) => setName(text)}/>
            </View>

            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Pokemon Dex No:</Text>
                <TextInput style={{borderWidth: 1}} onChangeText={(text) => setPokeNum(text)}/>
            </View>

            <View style={{padding: 10}}>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value) => setType(value)}
                    items={[
                        {label:"Normal", value:"Normal"},
                        {label:"Grass", value:"Grass"},
                        {label:"Psychic", value:"Psychic"},
                    ]}
                />
            </View>
            <Button title="SUBMIT" onPress={() => {
                let item = {key: name, num: pokeNum};  // dataSource {key: d}
                let indexNum = 0;
                if(type == "Grass") {
                    indexNum = 1;
                }
                if(type == "Psychic") {
                    indexNum = 2;
                }
                dataSource[indexNum].data.push(item);
                navigation.navigate('Home')
            }
            }
            />
        </View>
    );
};

export default Add;
