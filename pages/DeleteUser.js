import React, { useState } from 'react';
import { View, SafeAreaView, Alert, ScrollView, KeyboardAvoidingView } from 'react-native';

import MyTextInput from '../components/MyTextInput'
import MyButton from '../components/MyButton'

import { openDatabase } from 'react-native-sqlite-storage'

const db = openDatabase({ name: 'UserDatabase2.db' })

const CreateUser = ({ navigation }) => {
  const [userId, setUserId] = useState('');

  function deletar_usuario() {
    console.log(userId)
    db.transaction(function (txn) {
      txn.executeSql(
        "DELETE  FROM table_user WHERE user_id = ?",
        [userId],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sucesso',
              'Contato deletado com sucesso',
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
              title="Deletar"
              onClick={deletar_usuario}
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateUser;
