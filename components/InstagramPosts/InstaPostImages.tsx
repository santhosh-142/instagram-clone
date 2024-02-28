import {FlatList} from 'react-native-gesture-handler';
import {useRef, useState} from 'react';
import {Dimensions} from 'react-native';
import {VStack, Box, Image} from '@gluestack-ui/themed';
import Actions from './Actions';

interface InstaPostImagesProps {
  likes: number;
  description: string;
  images: string[];
}

const InstaPostImages = ({
  images,
  likes,
  description,
}: InstaPostImagesProps) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const onViewableItemsChanged = useRef((item: any) => {
    const index = item.viewableItems[0].index;
    setCurrentSlideIndex(index);
  });

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  });

  return (
    <>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={images}
        renderItem={({item}) => <Post postImage={item} />}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig.current}
      />
      <Actions
        likes={likes}
        description={description}
        images={images}
        currentSlideIndex={currentSlideIndex}
      />
    </>
  );
};

const Post = ({postImage}: any) => {
  const deviceWidth = Dimensions.get('window').width;
  return (
    <VStack backgroundColor="#fff" width={deviceWidth}>
      <Box width={'100%'} height={375}>
        <Image
          source={{
            uri: postImage,
          }}
          alt="post-img"
          width={'100%'}
          height={'100%'}
        />
      </Box>
    </VStack>
  );
};

export default InstaPostImages;
