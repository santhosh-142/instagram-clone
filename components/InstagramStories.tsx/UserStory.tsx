import {
  Box,
  HStack,
  Image,
  Input,
  InputField,
  Pressable,
  Text,
} from '@gluestack-ui/themed';
import {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import usersStories from '../../usersStories.json';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  useAnimatedReaction,
  runOnJS,
} from 'react-native-reanimated';

import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { useNavigation } from '@react-navigation/native';

const UserStory = ({route}: any) => {
  const {index} = route.params;
  const [userIndex, setuserIndex] = useState(index);
  const [storyIndex, setStoryIndex] = useState(0);

  const user = usersStories[userIndex];
  const story = user.stories[storyIndex];
  const usersLength = usersStories.length;

  const storyViewDuration = 3 * 1000;

  const progress = useSharedValue(0);
  const navigation = useNavigation<any>();

  useEffect(() => {
    progress.value = 0;
    progress.value = withTiming(1, {
      duration: storyViewDuration,
      easing: Easing.linear,
    });
  }, [storyIndex, userIndex]);

  const gotoNextStory = () => {
    setStoryIndex(index => {
      if (index === user.stories.length - 1) {
        goToNextUser();
        return 0;
      }
      return index + 1;
    });
  };

  const goToNextUser = () => {
    setuserIndex((index: number) => {
      if (index === usersLength - 1) return 0;
      return index + 1;
    });
  };

  const gotoPrevStory = () => {
    setStoryIndex(index => {
      if (index === 0) {
        gotoPrevUser();
        return 0;
      }
      return index - 1;
    });
  };

  const gotoPrevUser = () => {
    setuserIndex((index: number) => {
      if (index === 0) return usersLength - 1;
      return index - 1;
    });
  };

  const indicatorAnimatedStyle = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
  }));

  useAnimatedReaction(
    () => {
      return progress.value;
    },
    (currentValue, previousValue) => {
      if (currentValue !== previousValue && currentValue === 1) {
        runOnJS(gotoNextStory)();
      }
    },
  );

  return (
    <SafeAreaView style={styles.container}>
      <Box style={styles.storyContainer}>
        <Image
          source={{
            uri: story,
          }}
          style={styles.image}
          alt="vertical-img-1"
        />
        <Pressable style={styles.navPressable} onPress={gotoPrevStory} />
        <Pressable
          style={[styles.navPressable, {right: 0}]}
          onPress={gotoNextStory}
        />

        <Box style={styles.header}>
          <Box style={styles.indicatorRow}>
            {user.stories.map((story, index) => (
              <Box style={styles.indicatorBG} key={`${user.userid}-${index}`}>
                <Animated.View
                  style={[
                    styles.indicator,
                    index === storyIndex && indicatorAnimatedStyle,
                    index > storyIndex && {width: 0},
                    index < storyIndex && {width: '100%'},
                  ]}
                />
              </Box>
            ))}
          </Box>
          <HStack paddingTop={10} style={{justifyContent: 'space-between', alignItems: 'center'}}>
            <HStack alignItems='center' gap={10}>
              <Image source={{uri: user.photo}} width={35} height={35} borderRadius={50} alt={user.userName} />
              <Text style={styles.username}>{user.userName}</Text>
            </HStack>
            <Pressable onPress={()=> navigation.navigate("bottomTabs")}><Feather name='x' size={25} style={{color: '#fff', fontWeight: 'bold'}}/></Pressable>
          </HStack>
        </Box>
        <HStack style={styles.footer}>
          <Input
            variant="outline"
            size="md"
            borderRadius={50}
            borderColor="white"
            style={{flex: 1, marginRight: 10}}>
            <InputField
              placeholder="Send message"
              placeholderTextColor="#fff"
              fontSize={18}
              fontWeight="bold"
            />
          </Input>
          <SimpleLineIcons name='paper-plane' size={30} color='#fff' />
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default UserStory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  storyContainer: {
    margin: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
    borderRadius: 10,
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  username: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  navPressable: {
    width: '30%',
    height: '100%',
    position: 'absolute',
  },
  indicatorRow: {
    flexDirection: 'row',
    gap: 5,
    marginVertical: 5,
  },
  indicatorBG: {
    flex: 1,
    height: 5,
    backgroundColor: 'gray',
    borderRadius: 10,
    overflow: 'hidden',
  },
  indicator: {
    backgroundColor: 'white',
    height: '100%',
  },
});
