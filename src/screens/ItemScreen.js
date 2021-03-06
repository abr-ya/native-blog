import React, { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Context as BlogContext } from '../context/BlogContext';
import { AntDesign } from '@expo/vector-icons';

const ItemScreen = ({ navigation }) => {
  const { state: blogPosts } = useContext(BlogContext);
  const id = navigation.getParam('id');
  const post = blogPosts.find(post => post.id === id);

  return (
    <View style={styles.view} >
      <Text style={styles.header}>{post.title}</Text>
      <Text>{post.content}</Text>
    </View>
  );
};

ItemScreen.navigationOptions = ({navigation}) => ({
  headerRight: () => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}
    >
      <AntDesign name="edit" style={styles.iconTop} />
    </TouchableOpacity>
  ),
});

const styles = StyleSheet.create({
  view: {
    flex: 1,
    margin: 10,
  },
  header: {
    fontSize: 24,
  },
  iconTop: {
    fontSize: 30,
    color: 'blue',
    margin: 20,
    marginBottom: 15,
  },
});

export default ItemScreen;
