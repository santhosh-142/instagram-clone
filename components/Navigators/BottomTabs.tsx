import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import HomeScreen from '../../screens/HomeScreen';
import {StyleSheet} from 'react-native';
import AddPostScreen from '../../screens/AddPostScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Image} from '@gluestack-ui/themed';

const Tab = createMaterialBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator labeled={false} barStyle={styles.barStyle} shifting={true}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <SimpleLineIcons name="home" style={styles.iconStyles} />
          ),
        }}
      />
      <Tab.Screen
        name="addPost"
        component={AddPostScreen}
        options={{
          tabBarIcon: () => (
            <AntDesign name="pluscircleo" style={styles.iconStyles} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=800',
              }}
              alt="story-img"
              width={28}
              height={28}
              borderRadius={50}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconStyles: {
    fontSize: 28,
  },
  barStyle: {
    backgroundColor: '#fff',
    padding: 0,
  },
});

export default BottomTabs;
