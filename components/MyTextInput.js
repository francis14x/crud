import React from 'react';
import { View, TextInput } from 'react-native';

const MyTextInput = (props) => {
  return <View
    style={{
      marginHorizontal: 35,
      marginTop: 10,
      borderColor: '#4caf50',
      borderWidth: 1,
    }}
  >
    <TextInput
      underlineColorAndroid='transparent'
      keyboardType={props.keyboardType}
      placeholderTextColor='#4caf50'
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      returnKeyType={props.returnKeyType}
      numberOfLines={props.numberOfLinesr}
      multiline={props.multiline}
      onSubmitEditing={props.onSubmitEditinger}
      style={props.style}
      blurOnSubmit={false}
      value={props.value}
    />
  </View>
};

export default MyTextInput;
