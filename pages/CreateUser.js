import React, { useState } from 'react';
import { View, SafeAreaView, Text, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';

import MyTextInput from '../components/MyTextInput'
import MyButton from '../components/MyButton'

import { openDatabase } from 'react-native-sqlite-storage'

const db = openDatabase({ name: 'UserDatabase2.db' })
const CreateUser = ({ navigation }) => {

  const [userName, setUserName] = useState('');
  const [userEmail, setuserEmail] = useState('');
  const [userNumber, setuserNumber] = useState('');

  function criar_usuario() {
    if (!userName || userName === '') {
      alert('Preencha o nome do usuário')
      return
    }
    if (!userEmail || userEmail === '') {
      alert('Preencha o email do usuário')
      return
    }
    if (!userNumber || userNumber === '') {
      alert('Preencha o número do usuário')
      return
    }

    db.transaction(function (txn) {
      txn.executeSql(
        "INSERT INTO  table_user (user_name, user_email, user_number) VALUES (?,?,?)",
        [userName, userEmail, userNumber],
        (tx, res) => {
          if (res.rowsAffected > 0) {
            Alert.alert(
              'Sucesso',
              'Contato registrado com sucesso',
              [
                {
                  text: 'OK',
                  onPress: () => navigation.navigate('HomeScreen')
                }
              ],
              { cancelable: false }
            )
          } else {
            alert('Falha ao registrar contato')
          }
        },
        (error) => { console.log(error) }
      );
    });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps='handled'>
            <KeyboardAvoidingView
              behavior='padding'
              style={{ flex: 1, justifyContent: 'space-between' }}>
            </KeyboardAvoidingView>
            <MyTextInput
              placeholder='Nome'
              onChangeText={(userName) => setUserName(userName)}
              style={{ padding: 10 }}
            />
            <MyTextInput
              placeholder='Email'
              onChangeText={(userEmail) => setuserEmail(userEmail)}
              style={{ padding: 10 }}
            />
            <MyTextInput
              placeholder='Número'
              onChangeText={(userNumber) => setuserNumber(userNumber)}
              style={{ padding: 10 }}
              keyboardType="numeric"
              maxLength={12}
            />

            <MyButton
              title="Criar"
              onClick={criar_usuario}
            />

          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateUser;
