import React from "react";
import { StyleSheet, Text, TextInput, Button } from "react-native";

const PostForm = ({ title, content, button }) => (
    <>
      <Text style={styles.label}>{title.label}</Text>
      <TextInput
        style={styles.input}
        value={title.value}
        onChangeText={(t) => title.setter(t)}
      />
      <Text style={styles.label}>{content.label}</Text>
      <TextInput
        style={styles.input}
        value={content.value}
        onChangeText={(t) => content.setter(t)}
      />
      <Button
        title={button.title}
        onPress={() => button.handler()}
      />    
    </>
);

const styles = StyleSheet.create({
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

export default PostForm;
