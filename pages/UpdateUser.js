import React, { useState } from 'react';
import { View, SafeAreaView, Alert, ScrollView, KeyboardAvoidingView } from 'react-native';

import MyTextInput from '../components/MyTextInput'
import MyButton from '../components/MyButton'

import { openDatabase } from 'react-native-sqlite-storage'

const db = openDatabase({ name: 'UserDatabase2.db' })

const UpdateUser = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [userEmail, setuserEmail] = useState('');
  const [userNumber, setuserNumber] = useState('');


  function atualizar_estados = (name, email, number) => {
    setUserName(name)
    setuserEmail(email)
    setuserNumber(number)
  }


  function search_user = () => {
    if (!userId || userId === '') {
      alert('Preencha o número do usuário')
      return
    }

    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT * FROM table_user WHERE ?",
        [userId],
        (tx, results) => {
          if (results.rows.length > 0) {
            const res = results.rows.item(0);
            console.log(res)
            atualizar_estados(res.user_name, res.user_email, res.user_number.toString())
          } else {
            atualizar_estados('', '', '')
          }
        },
        (error) => { console.log(error) }
      );
    });
  }


  function atualizar_usuarios = () => {
    console.log(userId)
    db.transaction(function (txn) {
      txn.executeSql(
        "UPDATE  table_user SET user_name = ?, user_email = ?, user_number = ? WHERE user_id = ?",
        [userName, userEmail, userNumber, userId],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sucesso',
              'Contato atualizado com sucesso',
              [
                {
                  text: 'OK',
                  onPress: () => navigation.navigate('HomeScreen')
                }
              ],
              { cancelable: false }
            )
          } else {
            alert('Erro na atualização')
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
              placeholder='Procure um id'
              keyboardType='numeric'
              onChangeText={(userId) => setUserId(userId)}
              style={{ padding: 10 }}
            />

            <MyButton
              title="Procurar"
              onClick={search_user}
            />

            <MyTextInput
              placeholder='Nome'
              onChangeText={(userName) => setUserName(userName)}
              value={userName}
              style={{ padding: 10 }}
            />
            <MyTextInput
              placeholder='Email'
              onChangeText={(userEmail) => setuserEmail(userEmail)}
              value={userEmail}
              style={{ padding: 10 }}
            />
            <MyTextInput
              placeholder='Número'
              onChangeText={(userNumber) => setuserNumber(userNumber)}
              style={{ padding: 10 }}
              value={userNumber}
              keyboardType="numeric"
              maxLength={12}
            />

            <MyButton
              title="Atualizar"
              onClick={atualizar_usuarios}
            />

          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UpdateUser;
