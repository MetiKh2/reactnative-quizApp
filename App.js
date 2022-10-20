/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import { NavigationContainer } from '@react-navigation/native';
// import React from 'react';
// import {
//   SafeAreaView,
//   StatusBar, StyleSheet,
//   Text,
// } from "react-native";
// import 'react-native-gesture-handler';
// import { createStackNavigator } from '@react-navigation/stack';
// import StartScreen from './src/Screens/StartScreen';

// const Stack = createStackNavigator();

// const App  = () => {

//     return (
//     <SafeAreaView style={{flex:1}}>
//       <StatusBar
//         barStyle={ 'light-content'}
//       />
//       <NavigationContainer>
//       <Stack.Navigator>
//       <Stack.Screen options={{headerShown:false}} name="Start" component={StartScreen} />
//     </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaView>
//   );
// };

// export default App;

/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';
import SuperAlert from 'react-native-super-alert';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import End from './src/components/End';
import Question from './src/components/Question';
import Welcome from './src/components/Welcome';
import {convertCategoryToCode} from './src/utils/converter';
const BASE_URL = 'https://opentdb.com/api.php';
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedDifficulty, setSelectedDifficulty] = useState();
  const [questionsCount, setQuestionsCount] = useState(5);
  const [status, setStatus] = useState('Start');
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const reset = () => {
    setSelectedCategory();
    setSelectedDifficulty();
    setQuestionsCount(5);
    setStatus('Start');
    setLoading(false);
    setQuestions([]);
    setQuestionIndex(0);
    setCorrectCount(0);
  };
  const onStart = () => {
    setLoading(true);
    fetch(
      `${BASE_URL}?type=multiple&amount=${questionsCount}&category=${convertCategoryToCode(
        selectedCategory,
      )}&difficulty=${selectedDifficulty.toLowerCase()}`,
    )
      .then(res => {
        return res.json();
      })
      .then(json => {
        setQuestions(json.results);
        setLoading(false);
        setStatus('Quiz');
        console.log(json.results);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleQuestion = (answer = null) => {
    let isCorrect=false;
    if (answer && answer == questions[questionIndex].correct_answer){
      setCorrectCount(prev => prev + 1);
      isCorrect=true;
    }
    if (questionIndex + 1 == questions.length) {
      alert('Good job!', `You answered ${parseInt(((isCorrect?correctCount+1:correctCount)/questions.length)*100)}% of questions correctly`);
      reset()
      return;
    }
    setQuestionIndex(prev => prev + 1);
  };
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#EBEFFF', justifyContent: 'center'}}>
      <SuperAlert />
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : status == 'Start' ? (
        <Welcome
          setQuestionsCount={setQuestionsCount}
          questionsCount={questionsCount}
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onStart={onStart}
        />
      ) : status == 'Quiz' && (
        <Question
          handleQuestion={handleQuestion}
          question={questions[questionIndex]}
          questionsCount={questions.length}
          questionIndex={questionIndex}
          correctCount={correctCount}
        />
      )
      }
    </SafeAreaView>
  );
};

export default App;
