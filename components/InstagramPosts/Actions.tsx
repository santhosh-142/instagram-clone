import {HStack, Box, VStack, Text} from '@gluestack-ui/themed';
import {Pressable, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';

interface ActionsProps {
  likes: number;
  description: string;
  images: string[];
  currentSlideIndex?: number;
}

const Actions = ({
  likes,
  description,
  images,
  currentSlideIndex,
}: ActionsProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <VStack>
      <HStack px={5} py={10} justifyContent="space-between">
        <HStack>
          <Pressable onPress={() => setIsLiked(!isLiked)}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              color={isLiked ? 'red' : 'black'}
              style={styles.iconStyle}
            />
          </Pressable>
          <Ionicon name="chatbubble-outline" style={styles.iconStyle} />
          <Ionicon name="paper-plane-outline" style={styles.iconStyle} />
        </HStack>
        <Box style={{flexDirection: 'row', alignItems: 'center'}}>
          {images.length > 1 &&
            images.map((item, index) => (
              <Box
                key={index}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor:
                    currentSlideIndex === index ? 'blue' : 'lightgray',
                  marginHorizontal: 3,
                }}
              />
            ))}
        </Box>
        <Pressable onPress={() => setIsSaved(!isSaved)}>
          <FontAwesome
            name={isSaved ? 'bookmark' : 'bookmark-o'}
            color={isSaved ? '#316FF6' : 'black'}
            style={styles.iconStyle}
          />
        </Pressable>
      </HStack>
      <Box px={5}>
        <Text style={{fontSize: 18, fontWeight: '600'}}>
          {isLiked ? likes + 1 : likes} likes
        </Text>
        <Text>{description}</Text>
      </Box>
    </VStack>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 26,
    marginRight: 5,
  },
});

export default Actions;