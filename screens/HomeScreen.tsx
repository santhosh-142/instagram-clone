import {Box} from '@gluestack-ui/themed';
import {RefreshControl, ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import InstaPosts from '../components/InstagramPosts';
import InstaStoriesWithNavigation from '../components/InstagramStories.tsx/InstaStories';
import { useState } from 'react';
import CustomProgressBar from '../components/InstagramStories.tsx/ProgressBar';

const HomeScreen = ({route}: any) => {
  const [refresh, setRefresh] = useState(false);

  const pullDown = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 1000)
  }

  return (
    <SafeAreaView>
      {/* <Box style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={() => pullDown()} />
          }
        >
          <InstaStoriesWithNavigation />
          <InstaPosts data={route} />
        </ScrollView>
      </Box> */}

      <CustomProgressBar />
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});
