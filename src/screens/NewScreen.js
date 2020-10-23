import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import PostForm from "../components/PostForm";
import { Context as BlogContext } from '../context/BlogContext';

const NewScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addPost } = useContext(BlogContext);

  useEffect(() => {
    console.log('open NewScreen');
  }, []);

  const addButtonHandler = () => {
    console.log('add', title, content);
    const callback = () => navigation.navigate('Index'); // можно добавить асинх.
    addPost(title, content, callback);
  }

  return (
    <View style={styles.view}>
      <Text style={styles.header}>New Post</Text>
      <PostForm
        title={{ label: 'Enter Title:', value: title, setter: setTitle }}
        content={{ label: 'Enter Content:', value: content, setter: setContent }}
        button={{ title: 'Add Blog Post', handler: addButtonHandler }}
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

export default NewScreen;
