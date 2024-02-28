import {Box, HStack, Image, Text, VStack} from '@gluestack-ui/themed';
import React from 'react';
import {StyleSheet} from 'react-native';

const ProfileStatistics = () => {
  return (
    <HStack style={styles.statistics}>
      <Box style={styles.circle}>
        <Image
          style={styles.profileImg}
          alt="profile-img"
          source={{
            uri: 'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=800',
          }}
        />
      </Box>
      <VStack style={styles.stat}>
        <Text style={styles.statCount}>54</Text>
        <Text style={styles.statLabel}>Posts</Text>
      </VStack>
      <VStack style={styles.stat}>
        <Text style={styles.statCount}>834</Text>
        <Text style={styles.statLabel}>Followers</Text>
      </VStack>
      <VStack style={styles.stat}>
        <Text style={styles.statCount}>162</Text>
        <Text style={styles.statLabel}>Following</Text>
      </VStack>
    </HStack>
    
  );
};

const styles = StyleSheet.create({
  statistics: {
    paddingHorizontal: 5,
    justifyContent: 'space-between',
  },
  circle: {
    width: 96,
    height: 96,
    borderRadius: 50,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImg: {
    width: 92,
    height: 92,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#fff',
  },
  stat: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  statCount: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 21,
  },
  statLabel: {
    fontSize: 15,
    fontWeight: '400',
  },
  userDetails: {
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
});

export default ProfileStatistics;
