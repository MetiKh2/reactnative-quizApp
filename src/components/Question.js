/* eslint-disable prettier/prettier */
import {View, Text, Pressable} from 'react-native';
import React from 'react';
import AnswerBox from './AnswerBox';
import {getAnswers} from './../utils/answers';

export default function Question({
  correctCount,
  questionIndex,
  question,
  questionsCount,
  handleQuestion,
}) {
  return (
    <View style={{padding: 20, backgroundColor: '#fff'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: 'green', fontSize: 11, letterSpacing: 1}}>
          Number OF Question : {questionIndex + 1}
        </Text>
        <Text style={{color: 'green', fontSize: 11, letterSpacing: 1}}>
          Correct Answers : {correctCount}/{questionsCount}
        </Text>
      </View>
      <Text
        style={{
          color: '#000',
          fontWeight: 'bold',
          letterSpacing: 1,
          marginTop: 15,
          lineHeight: 25,
          fontSize: 17,
        }}>
        {question.question}
      </Text>
      {getAnswers(question).map((answer, i) => (
        <Pressable
          key={i + ' ' + answer}
          onPress={() => handleQuestion(answer)}>
          <AnswerBox answer={answer} />
        </Pressable>
      ))}
      <Pressable
        onPress={() => handleQuestion()}
        style={{backgroundColor: '#FFB100'}}>
        <Text
          style={{
            color: '#000',
            fontSize: 14,
            letterSpacing: 1,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingVertical: 6,
          }}>
          Next Question
        </Text>
      </Pressable>
    </View>
  );
}
