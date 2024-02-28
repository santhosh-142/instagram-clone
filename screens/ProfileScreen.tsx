import React from 'react';
import Profile from '../components/profile';

const ProfileScreen = ({route}: any) => {
  const {params} = route;
  const {username, uname, ubio, uwebsite, uimgUrl, id} = params || {};
  return (
    <Profile
      upname={uname}
      upbio={ubio}
      upwebsite={uwebsite}
      upImgUrl={uimgUrl}
      upid={id}
      username={username}
    />
  );
};
export default ProfileScreen;
