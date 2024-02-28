import {Box, Button, ButtonText, Image, Text, View} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';

const deviceWidth = Dimensions.get('window').width;

interface Post {
  id: number;
  username: string;
  profileImage: string;
  location: string;
  images: string[];
  likes: number;
  description: string;
}

const AddPostScreen = () => {
  const [imageUrl, setImageUrl] = useState();
  const [description, setDescription] = useState("");
  const navigation = useNavigation<any>();
  const newPostObj: Post = {
    id: 10,
    username: 'Santhosh',
    profileImage: 'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=800',
    location: 'Andhra, India',
    images: [],
    likes: 126,
    description: '',
  };

  const onPickImage = async () => {
    const result = await launchImageLibrary();
    setImageUrl(result.assets[0].uri);
  };

  const handlePost = () => {
    if (imageUrl) newPostObj.images[0] = imageUrl;
    if (description) newPostObj.description = description;
    newPostObj.id = new Date().getTime();
    setImageUrl(undefined);
    setDescription("");
    navigation.navigate('home', {newPostObj});
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Box style={styles.container}>
          <Box style={styles.imgContainer}>
            {imageUrl ? (
              <Image
                source={{uri: imageUrl}}
                alt="profile-img"
                style={styles.btn}
              />
            ) : (
              <Button
                onPress={onPickImage}
                size="lg"
                variant="outline"
                action="secondary"
                style={styles.btn}>
                <ButtonText>Choose Image</ButtonText>
              </Button>
            )}
          </Box>
          <TextInput
            placeholder="Enter description"
            style={styles.input}
            onChangeText={text => setDescription(text)}
          />
          <Button onPress={handlePost}>
            <ButtonText>Post</ButtonText>
          </Button>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};


export default AddPostScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  imgContainer: {
    width: deviceWidth / 1.5,
    height: 300,
  },
  btn: {
    borderRadius: 20,
    width: '100%',
    height: '100%',
  },
  input: {
    fontSize: 18,
    width: deviceWidth / 1.5,
    borderColor: 'gray',
    borderWidth: 1,
    height: 80,
    borderRadius: 20,
    padding: 10,
  },
});
