/* eslint-disable prettier/prettier */
import {View, Text, TextInput, Pressable} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import categories from '../data/categories';

export default function Welcome({
    onStart,
  setQuestionsCount,
  questionsCount,
  selectedDifficulty,
  selectedCategory,
  setSelectedDifficulty,
  setSelectedCategory
}) {
  return (
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
              textAlign: 'center',
            }}
            keyboardType="numeric"
            maxLength={3}
            onChangeText={(val)=>setQuestionsCount(parseInt(val))}
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
          defaultValue={selectedCategory}
            buttonStyle={{backgroundColor: '#F1F5F8', flex: 1, marginTop: 10}}
            defaultButtonText="-"
            data={categories.map(category => category.name)}
            onSelect={(selectedItem, index) => {
              setSelectedCategory(selectedItem)
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
            defaultValue={selectedDifficulty}
            data={['Easy', 'Medium', 'Hard']}
            onSelect={(selectedItem, index) => {
             setSelectedDifficulty(selectedItem)
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
        <Pressable disabled={!selectedCategory||!selectedDifficulty||!questionsCount} onPress={onStart} style={!selectedCategory||!selectedDifficulty||!questionsCount?{backgroundColor:'rgba(255,177,0,0.4)'}:{backgroundColor: '#FFB100'}}>
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
  );
}
