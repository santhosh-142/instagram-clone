import {createStackNavigator} from '@react-navigation/stack';
import UserStory from '../InstagramStories.tsx/UserStory';
import HomeScreen from '../../screens/HomeScreen';
import BottomTabs from './BottomTabs';
import InstaStories from '../InstagramStories.tsx/InstaStories';
import Profile from '../profile';
import EditProfileScreen from '../../screens/EditProfileScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import LoginScreen from '../../screens/LoginScreen';
import IndividualPost from '../profile/IndividualPost';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="bottomTabs" component={BottomTabs} />
      <Stack.Screen name="userStory" component={UserStory} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="instaStories" component={InstaStories} />
      {/* <Stack.Screen name="home" component={HomeScreen} /> */}
      <Stack.Screen name="profileScreen" component={ProfileScreen} />
      <Stack.Screen name="editProfile" component={EditProfileScreen} />
      <Stack.Screen name="individualPost" component={IndividualPost} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
