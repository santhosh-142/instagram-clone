import {Box, Text, VStack} from '@gluestack-ui/themed';
import {FlatList} from 'react-native';
import UserDetails from './UserDetails';
import allPosts from '../../allPosts.json';
import InstaPostImages from './InstaPostImages';
import {useEffect, useState} from 'react';

const InstaPosts = ({data}: any) => {
  const [posts, setPosts] = useState(allPosts);
  const [fetchingMore, setFetchingMore] = useState(false);

  useEffect(() => {
    if (data.params !== undefined) {
      setPosts([data.params.newPostObj, ...allPosts]);
    }
  }, [data.params]);

  const handleDeletePost = (
    postId: number,
    setPosts: React.Dispatch<React.SetStateAction<any[]>>,
  ) => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
  };

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const fetchMorePosts = () => {
    if (!fetchingMore && posts.length < 25) {
      setFetchingMore(true);
      const newPosts = Array.from({ length: 1 }, (_, ) => {
        const randomIndex = getRandomInt(0, allPosts.length);
        return allPosts[randomIndex];
      });
      setPosts(prevPosts => [...prevPosts, ...newPosts]);
      setFetchingMore(false);
    }
  };

  return (
    <VStack>
      <FlatList
        keyExtractor={(item, index) => item.id.toString() + index}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        data={posts}
        renderItem={({item}) => {
          return (
            <Box marginBottom={10}>
              <UserDetails
                id={item.id}
                username={item.username}
                profileImage={item.profileImage}
                location={item.location}
                onDelete={() => handleDeletePost(item.id, setPosts)}
                setPosts={setPosts}
              />
              <InstaPostImages
                likes={item.likes}
                description={item.description}
                images={item.images}
              />
            </Box>
          );
        }}
        onEndReached={fetchMorePosts}
        onEndReachedThreshold={1}
      />
    </VStack>
  );
};

export default InstaPosts;
