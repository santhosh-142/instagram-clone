import {Box, Image, Text} from '@gluestack-ui/themed';
import {ScrollView} from 'react-native-gesture-handler';
import {Dimensions, FlatList, Pressable, StyleSheet} from 'react-native';
import users from '../../users.json';
import {useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';

const deviceWidth = Dimensions.get('screen').width - 4;

interface PostsProps {
  name: string;
  bio: string;
  upid?: number;
}

const Posts = ({name, bio, upid}: PostsProps) => {
  // const data = users[0].images;
  const navigation = useNavigation<any>();
  const [data, setData] = useState(users[0].images);

  const handleDelete = (id: number) => {
    setData(data.filter((item, index) => (index != id)));
  }

  useEffect(() => {
    if(upid && upid >= 0) {
      handleDelete(upid);
    }
  }, [upid])
  

  const gotoIndividualPost = (imageUrl: string, id: number) => {
    navigation.navigate('individualPost', {name, bio, imageUrl, id: id})
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{width: '100%', height: '100%'}}>
      <Box style={styles.imagesContainer}>
        {data.map((item, index) => (
          <Pressable key={index} onPress={() => gotoIndividualPost(item, index)}>
            <Box key={index}>
              <Image source={{uri: item}} style={styles.img} alt="img" />
            </Box>
          </Pressable>
        ))}
      </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imagesContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 2,
  },
  img: {
    width: deviceWidth / 3,
    height: 150,
  },
});

export default Posts;
