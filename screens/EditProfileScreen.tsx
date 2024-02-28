import {SafeAreaView} from 'react-native';
import EditProfile from '../components/profile/EditProfile';

const EditProfileScreen = ({route}: any) => {
  const {bio, name, website, updateProfile} = route.params;
  return (
    <SafeAreaView style={{paddingHorizontal: 5}}>
      <EditProfile name={name} bio={bio} website={website} updateProfile={updateProfile}/>
    </SafeAreaView>
  );
};

export default EditProfileScreen;
