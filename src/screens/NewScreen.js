import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { Context as BlogContext } from '../context/BlogContext';

const NewScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addPost } = useContext(BlogContext);

  useEffect(() => {
    console.log('open NewScreen');
    //console.log(title, typeof(title));
  }, []);

  const addButtonHandler = (title, content) => {
    console.log('add', title, content);
    const callback = () => navigation.navigate('Index'); // можно добавить асинх.
    addPost(title, content, callback);
  }

  return (
    <View style={styles.view}>
      <Text style={styles.header}>New Post</Text>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={(t) => setTitle(t)} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={(t) => setContent(t)} />
      <Button
        title="Add Blog Post"
        onPress={() => addButtonHandler(title, content)}
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
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },  
});

export default NewScreen;
