import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MyButton = (props) => {
  return (
    <TouchableOpacity style={style.button} onPress={props.onClick}>
      <Text style={style.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#4caf50',
    color: '#FFF',
    padding: 10,
    marginTop: 16,
    marginHorizontal: 35,
  },
  text: {
    color: '#FFFFFF',
  },
});

export default MyButton;
