import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { openDatabase } from 'react-native-sqlite-storage'

const db = openDatabase({ name: 'UserDatabase2.db' })

const CreateUser = ({ navigation }) => {
  const [listaUsuario, setListaUsuario] = useState([])
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT * FROM table_user",
        [],
        (tx, res) => {
          if (res.rows.length > 0) {
            const novalista = []
            for (let i = 0; i < res.rows.length; i++) {
              novalista.push(res.rows.item(i))
            }

            setListaUsuario(novalista)
          } else {
            alert('Usuario não encontrado')
          }
        },
        (error) => { console.log(error) }
      );
    });
  }, [])

  function listSeparator() {
    return (
      <View style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }} />
    )
  }

  function listItemRender(item) {
    return (
      <View key={item.user_id} style={{ padding: 20, backgroundColor: '#FFF' }}>
        <Text>ID: {item.user_id}</Text>
        <Text>Nome: {item.user_name}</Text>
        <Text>Email: {item.user_email}</Text>
        <Text>Número: {item.user_number}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <FlatList
            data={listaUsuario}
            ItemSeparatorComponent={listSeparator}
            keyExtractor={(item, index) => index.toString}
            renderItem={({ item }) => listItemRender(item)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateUser;
