import 'react-native-gesture-handler';

import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import HomeScreen from './pages/HomeScreen';
import CreateUser from './pages/CreateUser';
import DeleteUser from './pages/DeleteUser';
import UpdateUser from './pages/UpdateUser';
import ViewAllUser from './pages/ViewAllUser';
import ViewUser from './pages/ViewUser';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Tela Inicial',
            headerStyle: {
              backgroundColor: '#4caf50',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Criar"
          component={CreateUser}
          options={{
            title: 'Criar Usuário',
            headerStyle: {
              backgroundColor: '#4caf50',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Atualizar"
          component={UpdateUser}
          options={{
            title: 'Atualizar Usuário',
            headerStyle: {
              backgroundColor: '#4caf50',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Visualizar Todos"
          component={ViewAllUser}
          options={{
            title: 'Visualizar Todos',
            headerStyle: {
              backgroundColor: '#4caf50',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Visualizar"
          component={ViewUser}
          options={{
            title: 'Visualizar',
            headerStyle: {
              backgroundColor: '#4caf50',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Deletar"
          component={DeleteUser}
          options={{
            title: 'Deletar Usuário',
            headerStyle: {
              backgroundColor: '#4caf50',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
