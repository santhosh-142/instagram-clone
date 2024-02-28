import {Box, HStack, Image, Text, VStack} from '@gluestack-ui/themed';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from '../Modal';
import {Pressable, ScrollView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Actions from '../InstagramPosts/Actions';

const IndividualPost = ({route}: any) => {
  const {name, bio, imageUrl, id} = route.params;
  const navigation = useNavigation<any>();
  const deletePost = (id: number) => {
    navigation.navigate('profileScreen', {id: id});
    // navigation.navigate('bottomTabs', { screen: 'profileScreen', params: {id: id}});
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <VStack>
          <HStack style={styles.details}>
            <VStack>
              <Text style={styles.name}>{name}</Text>
              <Text>{bio}</Text>
            </VStack>
            <Modal id={id} deletePost={deletePost} />
          </HStack>
          <Box width={'100%'} height={375}>
            <Image
              source={{
                uri: imageUrl,
              }}
              alt="post-img"
              width={'100%'}
              height={'100%'}
            />
          </Box>
        </VStack>
        <Actions likes={24} description='Passionate about technologies' images={[]} />
        <Pressable
          style={{alignItems: 'center'}}
          onPress={() =>
            navigation.navigate('bottomTabs', {screen: 'profileScreen'})
          }>
          <Text
            style={{
              backgroundColor: 'red',
              padding: 10,
              marginVertical: 10,
              color: '#fff',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Cancel
          </Text>
        </Pressable>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  details: {
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconStyle: {
    fontSize: 26,
    marginRight: 5,
  },
});

export default IndividualPost;
