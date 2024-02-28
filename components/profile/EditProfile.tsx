import {
  HStack,
  Image,
  Input,
  InputField,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Pressable, ScrollView, StyleSheet, TextInput} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

interface EditProfileProps {
  name: string;
  bio: string;
  website: string;
  imgUrl?: string;
  updateProfile: (newName: string, newBio: string, newWebsite: string, newImgUrl: string) => void;
}

const EditProfile = ({name, bio, website, imgUrl, updateProfile}: EditProfileProps) => {
  const navigation = useNavigation<any>();
  
  const [uname, setName] = useState(name);
  const [ubio, setBio] = useState(bio);
  const [uwebsite, setWebsite] = useState(website);
  const [uimgUrl, setImgUrl] = useState('https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=800');


  const handleUpdate = () => {
    updateProfile(uname, ubio, uwebsite, uimgUrl);
    navigation.navigate('bottomTabs', {screen: 'profileScreen', params: {uname, ubio, uwebsite, uimgUrl} });
    // navigation.navigate('profileScreen', { uname, ubio, uwebsite, uimgUrl});
  };

  const handleProfileImageChange = async () => {
    const result = await launchImageLibrary();
    if(result) setImgUrl(result.assets[0].uri);
  };

  return (
    <ScrollView>
    <VStack style={{paddingHorizontal: 5}}>
      <HStack style={styles.header}>
        <Text style={{fontSize: 20}}>Cancel</Text>
        <Text style={styles.boldHeadingText}>Edit Profile</Text>
        <Pressable onPress={handleUpdate}>
          <Text style={[styles.boldHeadingText, {color: '#3897F0'}]}>Done</Text>
        </Pressable>
      </HStack>
      <VStack style={styles.imgContainer}>
        <Image
          style={styles.profileImg}
          alt="profile-img"
          source={{uri: uimgUrl}}
        />
        <Pressable onPress={handleProfileImageChange}>
          <Text fontSize={18} color="#3897F0">
            Change Profile Photo
          </Text>
        </Pressable>
      </VStack>
      <VStack>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={uname}
          placeholder="Enter your name"
          onChangeText={text => setName(text)}
        />
        <Text style={styles.label}>Bio</Text>
        <TextInput
          style={styles.input}
          value={ubio}
          placeholder="Enter your Bio"
          onChangeText={text => setBio(text)}
        />
        <Text style={styles.label}>Website</Text>
        <TextInput
          style={styles.input}
          value={uwebsite}
          placeholder="Enter your Bio"
          onChangeText={text => setWebsite(text)}
        />
      </VStack>
    </VStack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FAFAFA',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  boldHeadingText: {
    fontWeight: '600',
    lineHeight: 21,
    fontSize: 21,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    fontSize: 18,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 25,
  },
});

export default EditProfile;
