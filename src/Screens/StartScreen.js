/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
const StartScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedDifficulty, setSelectedDifficulty] = useState();
  const [questionsCount, setQuestionsCount] = useState(2);
  return (
    <View
      style={{flex: 1, backgroundColor: '#EBEFFF', justifyContent: 'center'}}>
      <View style={{padding: 20, backgroundColor: '#fff'}}>
        <Text
          style={{
            color: '#000',
            fontSize: 22,
            fontWeight: 'bold',
            letterSpacing: 1,
          }}>
          Setup Quiz
        </Text>
        <View style={{marginVertical: 20}}>
          <Text style={{color: '#000', fontSize: 16, letterSpacing: 1}}>
            Number Of Questions
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={{
                flex: 1,
                backgroundColor: '#F1F5F8',
                marginTop: 10,
                color: '#000',
                textAlign:'center'
              }}
              keyboardType="numeric"
              onChangeText={setQuestionsCount}
              value={questionsCount.toString()}
            />
          </View>
        </View>
        <View style={{marginVertical: 20}}>
          <Text style={{color: '#000', fontSize: 16, letterSpacing: 1}}>
            Category
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <SelectDropdown
              buttonStyle={{backgroundColor: '#F1F5F8', flex: 1, marginTop: 10}}
              defaultButtonText="-"
              data={['Sport', 'History', 'Politics']}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
          </View>
        </View>
        <View style={{marginVertical: 20}}>
          <Text style={{color: '#000', fontSize: 16, letterSpacing: 1}}>
            Select Difficulty
          </Text>
          <View style={{flexDirection: 'row'}}>
            <SelectDropdown
              buttonStyle={{backgroundColor: '#F1F5F8', flex: 1, marginTop: 10}}
              defaultButtonText="-"
              data={['Easy', 'Medium', 'Hard']}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
          </View>
        </View>
        <View style={{marginVertical: 20}}>
          <Pressable style={{backgroundColor: '#FFB100'}}>
            <Text
              style={{
                color: '#000',
                fontSize: 16,
                letterSpacing: 1,
                fontWeight: 'bold',
                textAlign: 'center',
                paddingVertical: 10,
              }}>
              Lets Go
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default StartScreen;
