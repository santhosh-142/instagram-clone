import {HStack, Text, Box, VStack} from '@gluestack-ui/themed';
import {Image, Pressable, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from '../Modal';
import { useState } from 'react';

interface UserDetailsProps {
  id: number;
  username: string;
  profileImage: string;
  location: string;
  onDelete: (postId: number, setPosts: React.Dispatch<React.SetStateAction<any[]>>) => void;
  setPosts: React.Dispatch<React.SetStateAction<any[]>>;
}

const UserDetails = ({id, username, profileImage, location, onDelete, setPosts}: UserDetailsProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <HStack
      justifyContent="space-between"
      py={10}
      px={5}
      alignItems='center'
      backgroundColor="#fff">
      <HStack gap={5}>
        <Box>
          <Image
            source={{uri: profileImage}}
            alt="profile-img"
            width={40}
            height={40}
            borderRadius={50}
          />
        </Box>
        <VStack>
          <Text fontSize={16} fontWeight="bold">{username}</Text>
          <Text fontSize={14} >{location}</Text>
        </VStack>
      </HStack>
      <Modal showModal={showModal} id={id} onDelete={onDelete} setPosts={setPosts} />
    </HStack>
  );
};

export default UserDetails;
