import React, { useEffect, useContext, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Context as BlogContext } from '../context/BlogContext';
import PostForm from "../components/PostForm";

const EditScreen = ({ navigation }) => {
  const { state: blogPosts, editPost } = useContext(BlogContext);
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});

  useEffect(() => {
    console.log('open EditScreen');
    setPost(blogPosts.find(post => post.id === navigation.getParam('id')));
    setLoading(false);
  }, []);

  const saveButtonHandler = (title, content) => {
    console.log('save:', post.id, title, content);
    const callback = () => navigation.pop();
    editPost(post.id, title, content, callback);
  };

  return loading
  ? (
    <View style={styles.view} >
      <Text>... loading ...</Text>
    </View> 
  ) : (
    <View style={styles.view} >
      <Text style={styles.header}>Edit Screen {post.id}</Text>
      <PostForm
        title={{ label: 'Edit Title:', value: post.title }}
        content={{ label: 'Edit Content:', value: post.content }}
        button={{ title: 'Save Blog Post', handler: saveButtonHandler }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    margin: 10,
  },
  header: {
    fontSize: 24,
  },
});

export default EditScreen;
