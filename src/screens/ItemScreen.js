import React, { useEffect, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Context as BlogContext } from '../context/BlogContext';

const ItemScreen = ({ navigation }) => {
  const { state: blogPosts } = useContext(BlogContext);

  useEffect(() => {
    const id = navigation.getParam('id');
    console.log('open ItemScreen', id);
    const blogPost = blogPosts.find(post => post.id === id);
    console.log(blogPost);
  }, []);

  return (
    <View style={styles.view} >
      <Text>Item Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default ItemScreen;
