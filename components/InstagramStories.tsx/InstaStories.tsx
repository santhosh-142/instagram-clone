import React from 'react';
import {Pressable, ScrollView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Box, HStack, Image, Text, View} from '@gluestack-ui/themed';
import users from '../../usersStories.json';
import {FlatList} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const InstaStories = () => {
  const navigation = useNavigation<any>();
  
  const gotoUserStory = ( index: number) => {
    navigation.navigate('userStory', {index: index})
  }
  return (
    <Box
      borderBottomColor="lightgray"
      borderBottomWidth={1}
      paddingBottom={5}
      marginBottom={10}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <HStack style={{padding: 7}}>
          <Image
            source={{uri: 'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=800'}}
            alt="story-img"
            style={styles.userImage}
          />
          <View style={{position: 'absolute'}}>
            <View style={styles.addBtnContainer}>
              <AntDesign name="plus" style={styles.addBtn} />
            </View>
            <Text style={[styles.userName, {textTransform: 'capitalize'}]}>
              Your Name
            </Text>
          </View>
          <FlatList
            scrollEnabled={false}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={users}
            renderItem={({item, index}) => (
              <Pressable onPress={() => gotoUserStory(index)}>
                <View style={{width: 85, padding: 5}} key={index}>
                  <LinearGradient
                    colors={['#bc2a8d', '#e95950', '#fccc63']}
                    style={{padding: 2, borderRadius: 50}}>
                    <Image
                      source={{uri: item.photo}}
                      alt="story-img"
                      style={styles.userImage}
                    />
                  </LinearGradient>
                  <Text style={styles.userName}>{item.userName}</Text>
                </View>
              </Pressable>
            )}
          />
        </HStack>
      </ScrollView>
    </Box>
  );
};

export default InstaStories;

const styles = StyleSheet.create({
  userImage: {
    height: 70,
    width: 70,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 4,
  },
  userName: {
    textAlign: 'center',
    fontSize: 13,
    textTransform: 'lowercase',
    marginTop: 5,
    lineHeight: 15,
  },
  addBtnContainer: {
    marginTop: 55,
    backgroundColor: '#4c68d7',
    marginLeft: 55,
    width: 23,
    height: 23,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: '#fff',
    justifyContent: 'center',
  },
  addBtn: {
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 12,
  },
});
