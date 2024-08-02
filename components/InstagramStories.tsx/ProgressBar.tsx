import React, {useState, useEffect} from 'react';
// import {View, Button, Image, StyleSheet} from 'react-native';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Button, ButtonText, Image} from '@gluestack-ui/themed';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  useAnimatedReaction,
  runOnJS,
  cancelAnimation,
} from 'react-native-reanimated';
import {Box} from '@gluestack-ui/themed';

const CustomProgressBar = () => {
  const [corouselIndex, setCorouselIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const carouselItems = [
    {
      image:
        'https://images.unsplash.com/photo-1678436748951-ef6d381e7a25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8YWV1NnJMLWo2ZXd8fGVufDB8fHx8fA%3D%3D',
      ar: 0.7,
    },
    {
      image:
        'https://images.unsplash.com/photo-1679508056887-5c76269dad54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ar: 0.8,
    },
    {
      image:
        'https://images.unsplash.com/photo-1681243303374-72d01f749dfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDczfGFldTZyTC1qNmV3fHxlbnwwfHx8fHw%3D',
      ar: 0.68,
    },
  ];

  const story = carouselItems[corouselIndex].image;
  const progress = useSharedValue(0);
  const duration = 2 * 1000;

  useEffect(() => {
    progress.value = 0;
    progress.value = withTiming(1, {
      duration: duration,
      easing: Easing.linear,
    });
  }, [corouselIndex]);

  const gotoNextItem = () => {
    setCorouselIndex(index =>
      index === carouselItems.length - 1 ? 0 : index + 1,
    );
  };

  useAnimatedReaction(
    () => {
      return progress.value;
    },
    (currentValue, previousValue) => {
      if (!isPaused && currentValue !== previousValue && currentValue === 1) {
        runOnJS(gotoNextItem)();
      }
    },
  );

  useEffect(() => {
    if (isPaused) {
      cancelAnimation(progress);
    } else {
      progress.value = withTiming(1, {
        duration: (1 - progress.value) * duration,
        easing: Easing.linear,
      });
    }
  }, [isPaused]);

  const togglePauseResume = () => {
    setIsPaused(prev => !prev);
  };

  const indicatorAnimatedStyle = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
  }));

  return (
    <>
      <Box>
        <Box>
          <Image
            source={{
              uri: story,
            }}
            style={styles.image}
            alt="vertical-img-1"
          />
        </Box>
        <Box style={styles.indicatorRow}>
          {carouselItems.map((story, index) => (
            <Box style={styles.indicatorBG} key={index}>
              <Animated.View
                style={[
                  styles.indicator,
                  index === corouselIndex && indicatorAnimatedStyle,
                  index > corouselIndex && {width: 0},
                  index < corouselIndex && {width: '100%'},
                ]}
              />
            </Box>
          ))}
        </Box>
        <Box
          style={{
            backgroundColor: 'blue',
            position: 'absolute',
            zIndex: 1000,
            bottom: 0,
          }}>
          <Button
            onPress={togglePauseResume}
            backgroundColor={'#841584'}
          >
            <ButtonText>{isPaused ? 'Resume' : 'Pause'}</ButtonText>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CustomProgressBar;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
    borderRadius: 10,
  },
  indicatorRow: {
    flexDirection: 'row',
    gap: 5,
    marginVertical: 5,
    position: 'absolute',
    top: 0,
  },
  indicatorBG: {
    flex: 1,
    height: 5,
    backgroundColor: 'gray',
    borderRadius: 10,
    overflow: 'hidden',
  },
  indicator: {
    backgroundColor: 'black',
    height: '100%',
  },
  buttonStyle: {
    position: 'absolute',
    bottom: 0,
  },
});
