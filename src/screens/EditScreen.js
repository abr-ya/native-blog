import React, { useEffect, useContext, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Context as BlogContext } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const { state: blogPosts } = useContext(BlogContext);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    console.log('open EditScreen');
    const post = blogPosts.find(post => post.id === navigation.getParam('id'));
    console.log(post);
    setId(post.id);
    setTitle(post.title);
    setContent(post.content);
    setLoading(false);
  }, []);

  return loading
  ? (
    <View style={styles.view} >
      <Text>... loading ...</Text>
    </View> 
  ) : (
    <View style={styles.view} >
      <Text style={styles.header}>Edit Screen {id}</Text>
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
