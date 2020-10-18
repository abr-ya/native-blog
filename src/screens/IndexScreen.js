import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Button } from "react-native";
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const {blogPosts, addBlogPost} = useContext(BlogContext);
  const [term, setTerm] = useState('111');

  useEffect(() => {
    console.log('open IndexScreen', term);
    console.log(blogPosts);
  }, []);

  return (
    <View style={styles.view} >
      <Text>Index Screen</Text>
      <Button
        title="Add Post"
        onPress={addBlogPost}
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
