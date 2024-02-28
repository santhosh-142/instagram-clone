import {StyleSheet} from 'react-native';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {Suspense} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './components/Navigators/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import EditProfileScreen from './screens/EditProfileScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProfileTopTab from './components/profile/ProfileTopTab';
import IndividualPost from './components/profile/IndividualPost';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Suspense>
      <GluestackUIProvider config={config}>
        <SafeAreaProvider> 
          <NavigationContainer>
          < AppNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </GluestackUIProvider>
    </Suspense>
  );
}

const styles = StyleSheet.create({
  logoName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#262626',
    paddingTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 5,
    letterSpacing: 1.5,
  },
});
