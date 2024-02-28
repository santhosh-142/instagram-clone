import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text} from '@gluestack-ui/themed';
import Posts from './Posts';
import Contacts from './Contacts';

const Tab = createMaterialTopTabNavigator();

const ProfileTopTab = () => {
  return (
    <Tab.Navigator initialRouteName="posts">
      <Tab.Screen name="posts" component={Posts} />
      <Tab.Screen name="contacts" component={Contacts} />
    </Tab.Navigator>
  );
};

export default ProfileTopTab;
