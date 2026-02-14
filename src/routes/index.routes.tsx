import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando suas telas
import Login from "../pages/login";

import { BottomRoutes } from './bottom.routes';


// 1. Definimos a Pilha (Stack) como um objeto de configuração
const RootStack = createNativeStackNavigator({
  initialRouteName: 'Login',
  screens: {
    Login: {
      screen: Login,
      options: { 
        headerShown: false // Esconde o cabeçalho no Login
      }
    },
    BottomRoutes: {
      screen: BottomRoutes,
      options: { 
        title: 'BottomRoutes',
        headerShown: false
      }
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);