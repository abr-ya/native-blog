import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Button } from "react-native";
import { Context as BlogContext } from '../context/BlogContext';

const IndexScreen = () => {
  const { state: blogPosts, addPost } = useContext(BlogContext);

  useEffect(() => {
    console.log('open IndexScreen');
    console.log(blogPosts, addPost);
  }, []);

  return (
    <View style={styles.view} >
      <Text>Index Screen</Text>
      <Button
        title="Add Post"
        onPress={addPost}
      />
      <FlatList
        data={blogPosts}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <Text>{item.title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default IndexScreen;
