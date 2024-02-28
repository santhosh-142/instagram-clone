import {Box, HStack} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import {Pressable, StyleSheet, Dimensions} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Posts from './Posts';
import Contacts from './Contacts';

interface PostsGridProps {
  name: string;
  bio: string;
  upid?: number;
}

const PostsGrid = ({name, bio, upid}: PostsGridProps) => {
  const [isGridPressed, setIsGridPressed] = useState(true);
  return (
    <Box>
      <HStack style={styles.gridContainer}>
        <Pressable
          style={[styles.bottomNav, isGridPressed && styles.borderBottomStyles]}
          onPress={() => setIsGridPressed(true)}>
          <Feather name="grid" size={30} />
        </Pressable>
        <Pressable
          style={[
            styles.bottomNav,
            !isGridPressed && styles.borderBottomStyles,
          ]}
          onPress={() => setIsGridPressed(false)}>
          <AntDesign name="user" size={30} />
        </Pressable>
      </HStack>
      <Box>{isGridPressed ? <Posts name={name} bio={bio} upid={upid} /> : <Contacts />}</Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    width: '100%',
    marginVertical: 5,
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  bottomNav: {
    width: '50%',
    alignItems: 'center',
    paddingBottom: 5,
    paddingVertical: 10,
  },
  borderBottomStyles: {
    borderBottomColor: '#3897F0',
    borderBottomWidth: 2,
  },
});

export default PostsGrid;
