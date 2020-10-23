import React, { useEffect, useContext, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Context as BlogContext } from '../context/BlogContext';
import { AntDesign } from '@expo/vector-icons';

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

  return loading
    ? (
      <View style={styles.view} >
        <Text>... loading ...</Text>
      </View> 
    ) : (
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
