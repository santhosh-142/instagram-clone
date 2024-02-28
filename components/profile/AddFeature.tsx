import {Box, Image, Text, VStack} from '@gluestack-ui/themed';
import {StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AddFeature = () => {
  return (
    <VStack style={{alignItems: 'center', marginRight: 10}}>
      <Box style={styles.circle}>
        <AntDesign name="plus" size={30} />
      </Box>
      <Text>New</Text>
    </VStack>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 74,
    height: 74,
    borderRadius: 64,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddFeature;
