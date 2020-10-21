import React, { useEffect, useContext, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Context as BlogContext } from '../context/BlogContext';

const ItemScreen = ({ navigation }) => {
  const { state: blogPosts } = useContext(BlogContext);
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});

  useEffect(() => {
    const id = navigation.getParam('id');
    console.log('open ItemScreen', id);
    setPost(blogPosts.find(post => post.id === id));
    setLoading(false);
  }, []);

  return (
    <View style={styles.view} >
      <Text>
        {loading
          ? '... loading ...'
          : post.title
        }
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default ItemScreen;
