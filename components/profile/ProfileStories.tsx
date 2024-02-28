import { Box } from '@gluestack-ui/themed';
import React from 'react';
import { FlatList, ScrollView, StyleSheet } from 'react-native';
import AddFeature from './AddFeature';
import stories from '../../featureStories.json';
import FeatureStory from './FeatureStory';

const ProfileStories = () => {
  return (
    <Box style={styles.stories}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <AddFeature />
        <FlatList
          horizontal
          scrollEnabled={false}
          data={stories}
          renderItem={({item, index}) => (
            <FeatureStory name={item.name} imageUrl={item.imageUrl} />
          )}
          ItemSeparatorComponent={() => <Box style={{marginRight: 10}} />}
        />
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
    stories: {
      paddingHorizontal: 5,
      paddingVertical: 10,
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
    },
  });

export default ProfileStories;
