import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Button, TouchableOpacity } from "react-native";
import { Context as BlogContext } from '../context/BlogContext';
import { MaterialIcons } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state: blogPosts, addPost, delPost } = useContext(BlogContext);

  useEffect(() => {
    console.log('open IndexScreen');
    //console.log(blogPosts, addPost, delPost);
  }, []);

  const delHandler = (id) => {
    console.log('del:', id);
    delPost(id);
  };

  const navHandler = (id) => {
    console.log('nav:', id);
    navigation.navigate('Item', { id });
  };

  return ( 
    <View style={styles.view} >
      <Text>Index Screen</Text>
      <Button
        title="Add Post"
        onPress={addPost}
      />
      <FlatList
        data={blogPosts}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navHandler(item.id)}>
            <View style={styles.row}>
              <Text style={styles.title}>{item.title} - {item.id}</Text>
              <TouchableOpacity onPress={() => delHandler(item.id)} >
                <MaterialIcons name="delete-forever" color="black" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 20,
  },
  icon: {
    fontSize: 30,
  },
});

export default IndexScreen;
