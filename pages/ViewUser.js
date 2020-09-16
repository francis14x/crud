import React, { useState } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import MyButton from '../components/MyButton';
import MyTextInput from '../components/MyTextInput';

import { openDatabase } from 'react-native-sqlite-storage'

const db = openDatabase({ name: 'UserDatabase2.db' })

const CreateUser = ({ navigation }) => {

  const [usuarioProcurado, setUsuarioProcurado] = useState('')
  const [usuarioDados, setUsuarioDados] = useState({})

  function procurar_contato() {
    console.log(usuarioProcurado)
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT * FROM table_user  WHERE user_id = ?",
        [usuarioProcurado],
        (tx, res) => {
          if (res.rows.length > 0) {
            setUsuarioDados(res.rows.item(0))
          } else {
            alert('Usuario não encontrado')
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
          <MyTextInput
            placeholder='Digite um id'
            keyboardType='numeric'
            onChangeText={setUsuarioProcurado}
            style={{ padding: 10 }}
          />

          <MyButton title='Procurar contato' onClick={procurar_contato} />
          <View style={{
            marginHorizontal: 35,
            marginTop: 10,
          }}>
            <Text>ID: {usuarioDados.user_id}</Text>
            <Text>Nome: {usuarioDados.user_name}</Text>
            <Text>Email: {usuarioDados.user_email}</Text>
            <Text>Número: {usuarioDados.user_number}</Text>

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateUser;
