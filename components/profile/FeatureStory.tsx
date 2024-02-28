import {Box, Image, Text, VStack} from '@gluestack-ui/themed';
import {ImageSourcePropType, StyleSheet} from 'react-native';

interface FeatureStoryProps {
  name: string;
  imageUrl: string;
}

const FeatureStory = ({name, imageUrl}: FeatureStoryProps) => {
  return (
    <VStack>
      <Box style={styles.circle}>
        <Image style={styles.img} alt="story-img" source={{uri: imageUrl}} />
      </Box>
      <Text style={{textAlign: 'center'}}>{name}</Text>
    </VStack>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 74,
    height: 74,
    borderRadius: 64,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 5,
  },
});

export default FeatureStory;
