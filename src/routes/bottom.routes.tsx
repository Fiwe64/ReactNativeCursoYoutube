import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from '../pages/list';
import User from '../pages/user';
import CustomTabBar from '../components/CustomTabBar';
import { MaterialIcons } from '@expo/vector-icons';
import { createComponentForStaticNavigation } from '@react-navigation/native';



const BottomRoutesConfig = createBottomTabNavigator({

  tabBar:(props)=><CustomTabBar {...props}/>,

  screens: {
    List: {
      screen:List,
      options:{
        title:"tarefas",
        headerShown: false,
        tabBarIcon:({color,size})=>(
          <MaterialIcons name="list-alt" size={size} color={color}/>
        ),
      }
    },
    User: {
      screen:User,
      options:{
        headerShown: false,
      }
    },
  },
});


export const BottomRoutes = createComponentForStaticNavigation(BottomRoutesConfig,"BottomRoutes");