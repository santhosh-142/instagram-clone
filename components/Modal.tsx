import React from 'react';
import {
  Actionsheet,
  Box,
  Button,
  ButtonText,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  ActionsheetItem,
  ActionsheetItemText,
  Pressable,
} from '@gluestack-ui/themed';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

interface ModalProps {
  id?: number;
  showModal?: boolean;
  onDelete?: (postId: number, setPosts: React.Dispatch<React.SetStateAction<any[]>>) => void;
  setPosts?: React.Dispatch<React.SetStateAction<any[]>>;
  deletePost?: (id: number) => void;
}

function Modal({id, showModal, onDelete, setPosts, deletePost}: ModalProps) {
  const [showActionsheet, setShowActionsheet] = React.useState(showModal);
  const handleClose = () => setShowActionsheet(!showActionsheet);

  const handleDelete = () => {
    setShowActionsheet(!showActionsheet);
    if(id && setPosts && onDelete)
    onDelete(id, setPosts);

    if(id != undefined && id >= 0 && deletePost) {
      deletePost(id);
    }
  };

  return (
    <Box>
      <Pressable onPress={handleClose}>
        <AntDesign name="ellipsis1" size={30} />
      </Pressable>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
        <ActionsheetBackdrop />
        <ActionsheetContent h="$64" zIndex={999}>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={handleDelete}>
            <ActionsheetItemText>Delete</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Edit</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Share</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Cancel</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </Box>
  );
}

export default Modal;
