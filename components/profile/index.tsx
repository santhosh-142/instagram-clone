import {
  Box,
  Button,
  ButtonText,
  HStack,
  Image,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import PostsGrid from './PostsGrid';
import ProfileStories from './ProfileStories';
import ProfileStatistics from './ProfileStatistics';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';

interface ProfileProps {
  upname?: string;
  upbio?: string;
  upwebsite?: string;
  upImgUrl?: string;
  upid?: number;
  username?: string;
}

const Profile = ({upname, upbio, upwebsite, upImgUrl, upid, username}: ProfileProps) => {
  const navigation = useNavigation<any>();

  const [name, setName] = useState('Santhosh Babu');
  const [bio, setBio] = useState('Software Engineer - 1, Geekyants');
  const [website, setWebsite] = useState('Geekyants.com');
  const [imgUrl, setImgUrl] = useState(
    'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=800',
  );

  const updateProfile = (
    newName: string,
    newBio: string,
    newWebsite: string,
    newImgUrl: string,
  ) => {
      setName(newName);
      setBio(newBio);
      setWebsite(newWebsite);
      setImgUrl(newImgUrl);
    
  };

  const goToEditProfile = () => {
    navigation.navigate('editProfile', {name, bio, website, imgUrl, updateProfile});
    
  };

  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: '#fff'}}>
        <HStack style={styles.header}>
          <HStack style={[styles.nameContainer]}>
            <Entypo name="lock" size={18} />
            <Text style={styles.username}>Santhosh</Text>
            <AntDesign name="down" size={18} />
          </HStack>
          <HStack>
            <Octicons name="three-bars" size={24} />
          </HStack>
        </HStack>
        {/* <ProfileStatistics /> */}
        <HStack style={styles.statistics}>
          <Box style={styles.circle}>
            <Image
              style={styles.profileImg}
              alt="profile-img"
              source={{
                uri: upImgUrl ? upImgUrl : imgUrl,
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
        <VStack style={styles.userDetails}>
          <Text style={styles.name}>{upname ? upname : name}</Text>
          <Text>{upbio ? upbio : bio}</Text>
          <Text>{upwebsite ? upwebsite : website}</Text>
        </VStack>
        <Button
          onPress={goToEditProfile}
          backgroundColor="#fff"
          borderColor="gray"
          borderWidth={1}
          m={5}
          borderRadius={6}>
          <ButtonText color="#262626">Edit Profile</ButtonText>
        </Button>
        <ProfileStories />
        <PostsGrid name={name} bio={bio} upid={upid} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 5,
    paddingTop: 10,
    justifyContent: 'space-between',
  },
  nameContainer: {
    gap: 5,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userDetails: {
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  name: {
    fontSize: 17,
    fontWeight: '600',
  },
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
});


export default Profile;