import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button } from "react-native";

const PostForm = ({ title, content, button }) => {
  const [input1, setInput1] = useState(title.value || '');
  const [input2, setInput2] = useState(content.value || '');

  return (
    <>
      <Text style={styles.label}>{title.label}</Text>
      <TextInput
        style={styles.input}
        value={input1}
        onChangeText={(t) => setInput1(t)}
      />
      <Text style={styles.label}>{content.label}</Text>
      <TextInput
        style={styles.input}
        value={input2}
        onChangeText={(t) => setInput2(t)}
      />
      <Button
        title={button.title}
        onPress={() => button.handler(input1, input2)}
      />    
    </>
  );
}

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
